import { createContext, useState} from "react";

export const contexto = createContext();

export const {Provider} = contexto;

export const CustonProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    const cartCopiado = [...cart];
    const agregarProducto = (prod,cantidad) =>{
        if(!isInCart(prod.id)){
            console.log("agregando producto");
            cartCopiado.push({
                id: prod.id,
                title: prod.title,
                price: prod.price,
                description: prod.description,
                img: prod.img,
                marca: prod.marca,
                cantidad: cantidad
            });
            console.log(cartCopiado);
        }
        else{
            console.log("actualizando producto");
            const producto_En_Cart = cartCopiado.map(producto =>{
                if(producto.id === prod.id){
                    producto.cantidad += cantidad; 
                }
                return producto; //retorna el objeto producto
            })
            setCart(producto_En_Cart); // actualiza el producto en el carrito. devuelve un array
            console.log(producto_En_Cart);
        }

    }
    const isInCart = (id) =>{
        const producto_En_Carrito = cartCopiado.some(producto => producto.id === id);
        console.log(producto_En_Carrito);
        return producto_En_Carrito
        
    }

    const eliminarProducto = (itemId) =>{
        const producto_Removido = cart.filter(producto => producto.id !==itemId);
        setCart(producto_Removido);

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