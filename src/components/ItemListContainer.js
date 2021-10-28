import { useEffect, useState } from "react"
/* import ItemCount from "./ItemCount" */
import ItemList from "./ItemList"
import productos_Json from "./productos.json"

const ItemListContainer = ({contador}) => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
            promesa
                .then((data_json)=>{
                    setTimeout(()=>{
                        setProductos(data_json)
                    },2000)
                })
                .catch(()=>{
                    console.log("Error")
                    
                })
    },[])
    const promesa= new Promise((resolve, reject) => {
        resolve(productos_Json)
    })

    return (
        <div>
            <span className="count">{contador}</span>
            {productos.length===0?<p>Cargando...</p>:<ItemList items={productos}/>}
            {/* <ItemCount stock={5} initial={1} onAdd={function(){console.log("")}}/> */}
        </div>
    )
}

export default ItemListContainer
