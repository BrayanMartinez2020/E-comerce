import { createContext, useState, useEffect  } from 'react'

export const ShoppingCartContext = createContext()

/**
 * Initializes the local storage by checking for the presence of 'account' and 'signOut' items.
 * If either item is not present, it sets the item with an empty object or boolean value respectively.
 * 
 * @return {void} This function does not return anything.
 */
export const initializeLocalStorage = () => {
  const accountInLocalStorage = localStorage.getItem('account')
  const signOutInLocalStorage = localStorage.getItem('signOut')

  let parsedAccount
  let parsedSignOut

  if (!accountInLocalStorage) {
    localStorage.setItem('account', JSON.stringify({}))
    parsedAccount = {}
  }else{
    parsedAccount = JSON.parse(accountInLocalStorage)
  }

  if (!signOutInLocalStorage) {
    localStorage.setItem('signOut', JSON.stringify(false))
    parsedSignOut = false
  }else{
    parsedSignOut = JSON.parse(signOutInLocalStorage)
  }
}

/**
 * Creates a ShoppingCartProvider component.
 *
 * @param {Object} children - The child components.
 * @return {JSX.Element} The ShoppingCartProvider component.
 */
export const ShoppingCartProvider = ({children}) => {
    // Account
    const [account, setAccount] = useState({})

    // Sign In · Sign Up
    const [signOut, setSignOut] = useState(false)

    // Shopping Cart · Increment quantity
    const [count, setCount] = useState(0)
  
    // Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
  
    // Checkout Side Menu · Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
  
    // Product Detail · Show product
    const [productToShow, setProductToShow] = useState({})
  
    // Shopping Cart · Add products to cart
    const [cartProducts, setCartProducts] = useState([])
  
    // Shopping Cart · Order
    const [order, setOrder] = useState([])
  
    // Get products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)
  
    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)
  
    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null)
  
    useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])
  
    /**
     * Filters the items by title based on the search keyword.
     *
     * @param {Array} items - The array of items to be filtered.
     * @param {string} searchByTitle - The search keyword for filtering by title.
     * @return {Array} - The filtered array of items.
     */
    const filteredItemsByTitle = (items, searchByTitle) => {
      return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
  
    /**
     * Filter items by category.
     *
     * @param {array} items - The array of items to filter.
     * @param {string} searchByCategory - The category to search by.
     * @return {array} The filtered array of items.
     */
    const filteredItemsByCategory = (items, searchByCategory) => {
      return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }
  
    /**
     * Filters the items based on the specified search type.
     *
     * @param {string} searchType - The search type to filter the items. Possible values are: 'BY_TITLE', 'BY_CATEGORY', 'BY_TITLE_AND_CATEGORY'.
     * @param {Array} items - The array of items to be filtered.
     * @param {string} searchByTitle - The title to search by when searchType is 'BY_TITLE' or 'BY_TITLE_AND_CATEGORY'.
     * @param {string} searchByCategory - The category to search by when searchType is 'BY_CATEGORY' or 'BY_TITLE_AND_CATEGORY'.
     * @return {Array} The filtered array of items based on the specified search type.
     */
    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
      if (searchType === 'BY_TITLE') {
        return filteredItemsByTitle(items, searchByTitle)
      }
  
      if (searchType === 'BY_CATEGORY') {
        return filteredItemsByCategory(items, searchByCategory)
      }
  
      if (searchType === 'BY_TITLE_AND_CATEGORY') {
        return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }
  
      if (!searchType) {
        return items
      }
    }
  
    useEffect(() => {
      if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
      if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
      if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
      if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])
  
    return (
      <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
        account,
        setAccount,
        signOut,
        setSignOut
      }}>
        {children}
      </ShoppingCartContext.Provider>
    )
  }