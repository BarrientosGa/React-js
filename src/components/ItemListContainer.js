import { useEffect, useState } from "react"
/* import ItemCount from "./ItemCount" */
import ItemList from "./ItemList"
import productos_Json from "./productos.json"

const ItemListContainer = ({contador}) => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        return(
            promesa
                .then(()=>
                    setTimeout(()=>{
                        setProductos(productos_Json)
                    },2000)
                )
                .catch(()=>
                    console.log("Error")
                )
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
    return (
        <div>
            {<ItemList prod={productos}/>}
            {<span className="accountant">{contador}</span>}
            {/* <ItemCount stock={5} initial={1} onAdd={function(){console.log("")}}/> */}
        </div>
    )
}

export default ItemListContainer
