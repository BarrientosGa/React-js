import ItemCount from './ItemCount';
const ItemDetail = ({ item }) => {
    return (
        <main className="main_ItemDetail">
            <div className="img_ItemDetail">
                <img src={item.img} alt="item" /> 
            </div>
            <div className="info_ItemDetail">
                <h3>{item.title}</h3>
                <p className="p_description">{item.description}</p>
                <p className="p_price">${item.price}</p>
                <ItemCount stock={3} initial={1} onAdd={() => { console.log("Tocaste el boton de comprar") }} />
            </div>
        </main>
    )
}

export default ItemDetail
