import { contexto } from "./context/CartContext"
import { useContext, useState } from "react"
import { firestore } from "../firebase"
import { Link } from "react-router-dom"
import firebase from "firebase/app"

const Form = () => {
    const { cart, vaciarCarrito } = useContext(contexto)
    const [id, setId] = useState(" ")
    const [datosUser, setDatosUser] = useState({
        nombre: " ",
        email: " ",
        tel: 0
    })


    const handleInputChange = (e) => {
        setDatosUser({
            ...datosUser,
            [e.target.name]: e.target.value
        })
    }
    const totalDeProductos = () => {
        let total = 0
        cart.forEach(producto => {
            total += producto.price
        })
        return total
    }
    const pedido = {
        cliente: datosUser,
        productos: cart,
        total: totalDeProductos(),
        fecha: firebase.firestore.Timestamp.fromDate(new Date())
    }


    const confirmarPedido = (e) => {
        e.preventDefault()

        const db = firestore

        const collection = db.collection("orders")

        const query = collection.add(pedido)

        query
            .then(({ id }) => {
                setId(id)
            })
            .catch(() => {
                console.log("error")
            })
        vaciarCarrito()
    }
    if (id === " ") {
        return (
            <form className="form-user">
                <h1>Completa tus datos</h1>
                <input onChange={handleInputChange} name="nombre" type="text" placeholder="Nombre" required />
                <input onChange={handleInputChange} name="email" type="email" placeholder="Email" required />
                <input onChange={handleInputChange} name="tel" type="tel" placeholder="Telefono" required />
                <button className="btn-finalizarOrders" onClick={confirmarPedido}>Confirmar pedido</button>
            </form>
        )
    }

    else {
        return (
            <div className="form-user">
                <h1>Gracias por tu compra</h1>
                <p>Tu pedido se ha realizado con exito, tu id de compra es: {id}</p>
                <Link to="/"><button className="btn-home">Volver al inicio</button></Link>
            </div>

        )
    }

}

export default Form
