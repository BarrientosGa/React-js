import { createContext, useState} from "react";

export const contexto = createContext();

export const {Provider} = contexto;

export const CustonProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const addItem = (cantidad,item) =>{
        if(cart.some(product => product.id === item.id)){
            const productoEnCart = cart.find(product => product.id === item.id)
            productoEnCart.cantidad += cantidad;
            console.log(productoEnCart);
        }
        else{
            console.log("no hay nada en el carrito");
            setCart([...cart, {cantidad,item}])
            console.log(cart);
            
        }
        
    }
    /* const isInCart = (id) =>{
        return 
    } */

    const removeItem = (itemId) =>{
    }
    const clear = () => {
        setCart([]);
    }
    

    const valor_De_contexto = {
        cart : cart,
        agregarProducto : addItem,
        eliminarProducto : removeItem,
        vaciarCarrito : clear
    }


    return(
        <Provider value={valor_De_contexto}>
            {children}
        </Provider>
    )
}
export default CustonProvider;