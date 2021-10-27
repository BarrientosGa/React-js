import { useEffect, useState } from "react"
import Item from "./Item"
const ItemList = ({ items }) => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        return(
            promesa
                .then(()=>{
                    setTimeout(()=>{
                        setProductos(items)
                    },2000)
                })
                .catch(()=>{
                    setProductos([])
                })
        )
    },[])
    const promesa= new Promise((res, rej) => {
        if(productos.length === 0){
            rej()
        }
        else{
            res()
        }
    })
    return(
        <div>
            {productos.map(products =>{
                return(
                    <Item key={products.id} producto={products}/>
                )
            })}
        </div>
    )
    
}
export default ItemList
