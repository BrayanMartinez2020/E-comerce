import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
/**
 * Generates the function comment for the given function body.
 *
 * @param {object} prop - the prop object passed to the Card component
 * @return {JSX.Element} - the JSX element representing the Card component
 */
const Card = (prop) => {
  const context = useContext(ShoppingCartContext)

  /**
   * Shows the product by opening the product detail and setting the product to show.
   *
   * @param {type} productDetail - the details of the product to be shown
   * @return {type} undefined
   */
  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }

  /**
   * Adds products to cart.
   *
   * @param {Event} event - The event object.
   * @param {Product} product - The product to be added to the cart.
   */
  const addProductsToCart = (event, product) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, product])
    context.openCheckoutSideMenu()
  }

  /**
   * Renders an icon based on the provided ID.
   *
   * @param {number} id - The ID of the icon to render.
   * @return {JSX.Element} The rendered icon as a JSX element.
   */
  const renderIcon = (id) => {
    const isInCart = context.cartProducts?.find( item => item.id === id)
    if (isInCart) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='absolute top-0 right-0 flex justify-center items-center bg-black text-white w-6 h-6 rounded-full m-2 p-1'>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      )
    }else{
      return (
        <svg onClick={(event) => addProductsToCart(event, prop.data)}
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      )
    }
  }

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct(prop.data)}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{prop.data.category.name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={prop.data.images[0]} alt={prop.data.title} />
        <div 
            >
           {renderIcon(prop.data.id)}
        </div>
      </figure>
      <p className='flex justify-between items-center'>
        <span className='text-sm font-light'>{prop.data.title}</span>
        <span className='text-lg font-medium'>${prop.data.price}</span>
      </p>
    </div>
  )
}

export { Card }