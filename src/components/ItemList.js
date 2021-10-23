import Item from "./Item"
const ItemList = ({items}) => {
    return (
        <div>
            {items.map(prod=>{
                <Item item={prod}/>
            })}
        </div>
    )
}

export default ItemList
