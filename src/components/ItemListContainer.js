import { useEffect, useState } from "react"
/* import ItemCount from "./ItemCount" */
import ItemList from "./ItemList"
import productos_Json from "./productos.json"

const ItemListContainer = ({contador}) => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        return(
            promesa
                .then(()=>{
                    setTimeout(()=>{
                        setProductos(productos_Json)
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
            console.log("hubo un error")
        }
        else{
            res()
        }
    })
    return (
        <div>
            {<span className="accountant">{contador}</span>}
            {/* <ItemCount stock={5} initial={1} onAdd={function(){console.log("")}}/> */}
            {productos.length ===0?<p>Cargando...</p>:<ItemList prod={productos}/>}
        </div>
    )
}

export default ItemListContainer
