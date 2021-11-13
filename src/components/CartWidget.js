import { contexto } from "./context/CartContext"
import { useContext } from "react"

const CartWidget = () => {
    const { cart } = useContext(contexto)

    return (
        <div>
            <span className="material-icons iconCart">
                shopping_cart
            </span>
            {cart.length == 0 ? <span className="count">0</span> : <span className="count">{cart.length}</span>}

        </div>

    )
}

export default CartWidget
