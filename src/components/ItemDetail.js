import ItemCount from './ItemCount';
import { contexto } from './context/CartContext';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';

const ItemDetail = ({ item }) => {
    const [mostrar, setMostrar] = useState(false);
    const { push } = useHistory();
    const { agregarProducto } = useContext(contexto);


    function onAdd(cantidad, e) {
        e.preventDefault();
        agregarProducto(item, cantidad);
        setMostrar(!mostrar);

    }
    const redireccionar = () => {
        push("/cart")
    }
    return (
        <main className="main_ItemDetail">
            <div className="img_ItemDetail">
                <img src={item.img} alt="item" />
            </div>
            <div className="info_ItemDetail">
                <h3>{item.title}</h3>
                <p className="p_description">{item.description}</p>
                <p className="p_price">${item.price}</p>
                <ItemCount stock={3} initial={1} onAdd={onAdd} />
                {mostrar && <button className="btn-irACart" onClick={redireccionar}>Ir a carrito</button>}
            </div>
        </main>
    )
}

export default ItemDetail
