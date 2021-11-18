import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router"
import GetItems from "./GetItems"

const ItemListContainer = () => {
    const { marca } = useParams();
    const [productos, setProductos] = useState([])
    useEffect(() => {

        if (marca) {
            GetItems(marca).then(resultados => {
                setProductos(resultados)
            })
        }
        else {
            GetItems().then(resultados => {
                setProductos(resultados)
            })
        }
    }, [marca])


    return (
        <div>
            {productos.length === 0 ? <div className="ring">Cargando<span className="span_ring"></span></div> : <ItemList items={productos} />}
        </div>
    )
}

export default ItemListContainer
