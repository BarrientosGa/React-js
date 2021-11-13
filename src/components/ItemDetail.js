import ItemCount from './ItemCount';
import { contexto } from './context/CartContext';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';

const ItemDetail = ({ item }) => {
    const [mostrar,setMostrar] = useState(false);
    const {push} = useHistory();
    const {agregarProducto} = useContext(contexto);
    

    function onAdd(cantidad,e){
        e.preventDefault();
        agregarProducto(item,cantidad);
        setMostrar(!mostrar);
        
    }
    const redireccionar = () =>{
        push("/cart") // despues de mostrar me redirrecciona a Cart
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
                {mostrar && <button onClick={redireccionar}>Ir a carrito</button>}
            </div>
        </main>
    )
}

export default ItemDetail

/*
    State uplifting
    
    creo la funcion onAdd en ItemDetail (padre) que recibe un parametro 
    cantidad, la funcion onAdd lo que hace es mostrar un consoleLog 
    con dicha cantidad y luego redirreciona a Cart.
    la funcion onAdd la paso por props al hijo ItemCount y en itemCount
    al boton confirmarCompra le paso un evento onClick que llama a la 
    funcion onAdd y le paso de argumento Account que va ser la cantidad
    que seleccione el usuario que luego va poder ser usada en ItemDetail.
*/