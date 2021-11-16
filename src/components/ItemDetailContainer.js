import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router"
import { firestore } from "../firebase" // acceso a la base de datos


const ItemDetailContainer = () => {
    const arrProducts = []
    const {id} = useParams();
    console.log(id)
    const [producto, setProducto] = useState([])
    useEffect(() => {
        const db = firestore

        const collection = db.collection("products")

        const query = collection.doc(id)

        const promesa = query.get()
            promesa
                .then(documento =>{
                    arrProducts.push(documento.data())
                    setProducto(arrProducts)
                    })
                .catch(() => {
                    console.log(" hubo un error")
                })
    }, [id])
    return (
        <div>
            {producto.length===0?<div className="ring">Cargando<span className="span_ring"></span></div>:producto.map(prod => {
                return <ItemDetail item={prod}/>
            })}
            
        </div>

    )
}

export default ItemDetailContainer
