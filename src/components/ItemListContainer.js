import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { firestore } from "../firebase" // acceso a la base de datos
import { useParams } from "react-router"

const ItemListContainer = () => {
    const {marca} = useParams();
    const arrProducts = []
    const [productos, setProductos] = useState([])
    useEffect(() => {
        const db = firestore

        const collection = db.collection("products")

        const promesa = collection.get()
        if(marca){
            promesa.then(doc => {
                doc.forEach(doc => {
                    arrProducts.push({
                        id: doc.id,
                        img: doc.data().img,
                        title: doc.data().title,
                        description: doc.data().description,
                        marca: doc.data().marca,
                        price: doc.data().price
                    })
                })
                const productosPorCategorias= arrProducts.filter(producto => producto.marca == marca)
                setProductos(productosPorCategorias)
            })
        }
        else{
            promesa.then(doc => {
                doc.forEach(doc => {
                    arrProducts.push({
                        id: doc.id,
                        img: doc.data().img,
                        title: doc.data().title,
                        description: doc.data().description,
                        marca: doc.data().marca,
                        price: doc.data().price
                })
            })
            setProductos(arrProducts)
        })
    }
    },[marca])
    

    return (
        <div>
            {productos.length===0?<div className="ring">Cargando<span className="span_ring"></span></div>:<ItemList items={productos}/>}
        </div>
    )
}

export default ItemListContainer
