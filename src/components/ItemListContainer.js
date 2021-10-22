
import ItemCount from "./ItemCount"
const ItemListContainer = ({contador}) => {
    return (
        <div>
            <span className="accountant">{contador}</span>
            <ItemCount stock={5} initial={1} onAdd={function(){console.log("")}}/>
        </div>
    )
}

export default ItemListContainer
