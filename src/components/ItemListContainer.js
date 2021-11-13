import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ItemList from "./ItemList"
import productos_Json from "./productos.json"
import { firestore } from "../firebase" // acceso a la base de datos

const ItemListContainer = () => {
    const {marca}=useParams()

    
    const [productos, setProductos] = useState([])
    useEffect(() => {
        let promesa

        if(marca){

            promesa= new Promise((resolve) => {
                setTimeout(() => {
                    resolve(productos_Json.filter(prod=>prod.marca == marca))
                },2000)
                
            })  
        }
        else{
            promesa= new Promise((resolve) => {
                setTimeout(() => {
                    resolve(productos_Json)
                },2000)
                
            })  
        }
        promesa.then(resolve=> {
            setProductos(resolve)
        })
                
    },[marca])
    

    return (
        <div>
            {productos.length===0?<div className="ring">Cargando<span className="span_ring"></span></div>:<ItemList items={productos}/>}
        </div>
    )
}

export default ItemListContainer
