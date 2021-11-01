import { useState, useEffect } from "react"
import productos_JSON from "./productos.json"
import ItemDetail from "./ItemDetail"
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    useEffect(() => {
        promesa
            .then(data => {
                setTimeout(() => {
                    getItem(data)
                }, 2000)
            })
            .catch(() => {
                console.log("error")
            })
    }, [])
    const getItem = (data) => {
        setProducto(data)
    }
    const promesa = new Promise((resolve) => {
        resolve(productos_JSON)
    })
    return (
        <div>
            {producto.map(prod => {
                return <ItemDetail item={prod}/>
            })}
        </div>

    )
}

export default ItemDetailContainer
