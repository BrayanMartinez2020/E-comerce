/**
 * Renders an orders card component.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.dateOrder - The date of the order.
 * @param {number} props.totalPrice - The total price of the order.
 * @param {number} props.totalProducts - The total number of products in the order.
 * @return {JSX.Element} - The rendered orders card component.
 */
const OrdersCard = (props) => {
  const { dateOrder, totalPrice, totalProducts } = props

  return (

    <div className="flex justify-between items-center border border-black rounded-lg w-80 p-4 mb-3">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">{dateOrder}</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>
        </p>
      </div>
    </div>

  )
}

export { OrdersCard }