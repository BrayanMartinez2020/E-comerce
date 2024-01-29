import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../../Components/OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'
/**
 * Generates the side menu for the checkout process.
 *
 * @return {JSX.Element} The side menu component.
 */
const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    /**
     * Deletes a product from the cart based on the provided ID.
     *
     * @param {number} id - The ID of the product to be deleted.
     * @return {undefined} This function does not return a value.
     */
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(item => item.id !== id)
        context.setCartProducts(filteredProducts)
    }
    /**
     * Handles the checkout process.
     *
     * @return {undefined} No return value.
     */
    const handleCheckout = () => {
        const date = new Date();
        const dateString = date.toString().split(' ')[1] + ' ' + date.toString().split(' ')[2] + ' ' + date.toString().split(' ')[3] + ' ' + date.toString().split(' ')[4];
        
        const orderToAdd = {
            date: dateString,
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts),
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)

    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="text-lg font-medium">My Order</h2>
                <svg
                    onClick={() => context.closeCheckoutSideMenu()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>

            </div>
            <div className="px-6 overflow-y-auto flex-1">
                {
                    context.cartProducts?.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            imgUrl={product.images[0]}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button
                        className='w-full bg-black text-white font-medium py-2 px-4 rounded-lg'
                        onClick={() => handleCheckout()}>
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    )
}

export { CheckoutSideMenu }