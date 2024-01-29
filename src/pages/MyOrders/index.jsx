import { useContext } from "react"
import { Link } from "react-router-dom"
import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from '../../Context'
import { OrdersCard } from "../../Components/OrdesCard"

/**
 * Renders the MyOrders component.
 *
 * @return {JSX.Element} The rendered JSX.Element of MyOrders component.
 */
function MyOrders() {

    const context = useContext(ShoppingCartContext)
    console.log(context.order);

    return (

        <Layout >
            <div className="flex items-center justify-center relative w-80 mb-4">
                <h1 className="font-medium text-xl">MyOrders</h1>
            </div>
            {
                context.order.map((product, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard
                            dateOrder={product.date}
                            totalPrice={product.totalPrice}
                            totalProducts={product.totalProducts}
                        />
                    </Link>
                ))
            }
        </Layout>
    )
}

export default MyOrders