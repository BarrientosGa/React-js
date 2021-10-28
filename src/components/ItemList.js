import Item from "./Item"
const ItemList = ({ items }) => {
    return(
        <div>
            {items.map(products =>{
                return <Item key={products.id} item={products}/>
            })}
        </div>
    )
    
}
export default ItemList
