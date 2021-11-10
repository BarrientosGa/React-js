import { createContext, useState} from "react";

export const contexto = createContext();

export const {Provider} = contexto;

export const CustonProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const agregarProducto = (item,cantidad) =>{
        if(!isInCart(item.id)){
            console.log("agregando producto");
            setCart([...cart,{ // creo un nuevo objeto a partir de item y cantidad
                id: item.id,
                title: item.title,
                price: item.price,
                description: item.description,
                img: item.img,
                marca: item.marca,
                cantidad: cantidad
            }]);
        }
        else{
            console.log("actualizando producto");
            const producto_En_Cart = cart.map(producto =>{
                if(producto.id === item.id){
                    producto.cantidad += cantidad; 
                }
                return producto; //retorna el objeto producto
            })
            setCart(producto_En_Cart); // actualiza el producto en el carrito. devuelve un array
        }

    }
    const isInCart = (id) =>{
        return cart.find(cartItem => cartItem.id === id);
    }

    const eliminarProducto = (itemId) =>{
        const producto_Removido = cart.filter(producto => producto.id !==itemId);
        setCart(producto_Removido);
        return producto;

    }
    const vaciarCarrito = () => {
        setCart([]);
    }
    

    const valor_De_contexto = {
        cart : cart,
        agregarProducto : agregarProducto,
        eliminarProducto : eliminarProducto,
        vaciarCarrito : vaciarCarrito
    }


    return(
        <Provider value={valor_De_contexto}>
            {children}
        </Provider>
    )
}
export default CustonProvider;