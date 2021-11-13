import { contexto } from "./context/CartContext"
import { useContext } from "react"

const Cart = () => {
    const {cart}= useContext(contexto)

    return (
        <main className="comp-Cart">
            {cart.length == 0?<p>Tu carrito esta vacio</p>:
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Nombre del producto</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                        {cart.map(producto =>{
                            return(
                                <tbody>
                                    <tr key={producto.id}>
                                    <td><img src={producto.img} width="130" height="110" alt="foto de celular"/></td>
                                    <td>{producto.title}</td>
                                    <td>{producto.cantidad}</td>
                                    <td>${producto.price * producto.cantidad}</td>
                                    </tr>
                                </tbody>    
                            )
                        })}
                    
                </table>
            }
        </main>
    )
}

export default Cart
