import { contexto } from "./context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, eliminarProducto, vaciarCarrito, finalizarCompra} = useContext(contexto)
    return (
        <main className="comp-Cart">
            {cart.length == 0 ? <div className="container-cartEmpty">
                <div className="details-cartEmpty">
                    <h1>Tu carrito esta vacio</h1>
                    <span class="material-icons icon-cartEmpty">
                        sentiment_dissatisfied
                    </span>
                </div>
                <div className="button-cartEmpty">
                    <Link to="/"><button>Volver al inicio</button></Link>
                </div>

            </div> :
                <table className="cart-table">
                    <thead className="cart-thead">
                        <tr className="cart-Titles">
                            <th>Producto</th>
                            <th>Nombre del producto</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    {cart.map(producto => {
                        const sacarProducto = () => {
                            eliminarProducto(producto.id)
                        }
                        return (
                            <tbody className="cart-tbody">
                                <tr key={producto.id}>
                                    <th><img src={producto.img} width="130" height="110" alt="foto de celular" /></th>
                                    <th>{producto.title}</th>
                                    <th>{producto.cantidad}</th>
                                    <th>${producto.price * producto.cantidad}</th>
                                    <th>
                                        <button onClick={sacarProducto} className="cart-btn-remove">
                                            <span class="material-icons">
                                                delete
                                            </span>
                                        </button>
                                    </th>
                                </tr>
                            </tbody>
                        )
                    })}
                    <div className="container-finishBuy">
                        <button onClick={finalizarCompra}>Finalizar compra</button>
                        <button onClick={vaciarCarrito}>Vaciar carrito</button>
                    </div>
                </table>
            }
        </main>
    )
}

export default Cart
