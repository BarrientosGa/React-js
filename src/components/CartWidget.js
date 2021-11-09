import { contexto } from "./context/CartContext"
import { useContext } from "react"

const CartWidget = () => {
    const {cart}= useContext(contexto)
    
    return (
        <span className="material-icons iconCart">
            shopping_cart
        </span>
    )
}

export default CartWidget
