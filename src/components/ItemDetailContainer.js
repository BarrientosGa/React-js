import { useState, useEffect } from "react"
import productos_JSON from "./productos.json"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router"
const ItemDetailContainer = () => {
    const {id} = useParams() 
    const [producto, setProducto] = useState([])
    useEffect(() => {
        if(id){
            promesa
            .then(data => {
                setTimeout(() => {
                    getItem(data.filter(item => item.id == id))
                }, 2000)
            })
        }
        else{
            promesa
            .catch(()=>{
                console.log("Error")
            })
        }
        
    }, [])
    const getItem = (data) => {
        setProducto(data)
    }
    const promesa = new Promise((resolve) => {
        resolve(productos_JSON)
    })
    return (
        <div>
            {producto.length==0?<div className="ring">Cargando<span className="span_ring"></span></div>:producto.map(prod => {
                return <ItemDetail item={prod}/>
            })}
            
        </div>

    )
}

export default ItemDetailContainer
