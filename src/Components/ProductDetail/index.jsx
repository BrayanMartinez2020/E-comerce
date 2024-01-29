import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './styles.css'
/**
 * Renders the product detail component.
 *
 * @return {JSX.Element} The product detail component.
 */
const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="text-lg font-medium">Product Detail</h2>
                <svg
                    onClick={() => context.closeProductDetail()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>

            </div>
            <figure className='px-6'>
                <img
                    className='w-full h-full rounded-lg'
                    src={context.productToShow.images}
                    alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export { ProductDetail }