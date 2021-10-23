
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import productos from "./productos.json"
const ItemListContainer = ({contador}) => {
    return (
        <div>
            <span className="accountant">{contador}</span>
            <ItemCount stock={5} initial={1} onAdd={function(){console.log("")}}/>
            <section>
            <ItemList items = {productos}/>
            </section>
        </div>
    )
}

export default ItemListContainer
