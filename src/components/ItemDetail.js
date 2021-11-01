import ItemCount from './ItemCount';
const ItemDetail = ({item}) => {
    return (
        <div>
            <img src="https://via.placeholder.com/150" alt="item" />
            <p>{item.description}</p>
            <p>${item.price}</p>
            <ItemCount stock={3} initial={1} onAdd={()=>{console.log("Tocaste el boton de comprar")}}/>
        </div>
    )
}

export default ItemDetail
