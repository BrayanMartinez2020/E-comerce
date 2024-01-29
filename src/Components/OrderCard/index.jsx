/**
 * Renders an order card with the given props.
 *
 * @param {Object} props - The props for the order card.
 * @param {string} props.id - The ID of the order.
 * @param {string} props.title - The title of the order.
 * @param {number} props.price - The price of the order.
 * @param {string} props.imgUrl - The URL of the order image.
 * @param {function} props.handleDelete - The function to handle order deletion (optional).
 * @return {JSX.Element} - The rendered order card.
 */
const OrderCard = (props) => {
    const { id, title, price, imgUrl, handleDelete } = props

    let renderCloseIcon 

    if (handleDelete) {
        renderCloseIcon =  <svg  onClick={() => handleDelete(id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    }
    return (

        <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg"
                        src={imgUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">${price}</p>
            {renderCloseIcon}
            </div>
        </div>

    )
}

export { OrderCard }