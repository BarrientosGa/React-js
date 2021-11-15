import { createContext, useState } from "react";
import { useHistory } from "react-router"
export const contexto = createContext();

export const { Provider } = contexto;

export const CustonProvider = ({ children }) => {
    const { push } = useHistory();
    const [cart, setCart] = useState([]);
    const cartCopiado = [...cart];
    const agregarProducto = (prod, cantidad) => {
        if (!isInCart(prod.id)) {
            cartCopiado.push({
                id: prod.id,
                title: prod.title,
                price: prod.price,
                description: prod.description,
                img: prod.img,
                marca: prod.marca,
                cantidad: cantidad
            });
            setCart(cartCopiado);
            console.log(cartCopiado);
        }
        else {
            const producto_En_Cart = cartCopiado.map(producto => {
                if (producto.id === prod.id) {
                    producto.cantidad += cantidad;
                }
                return producto; //retorna el objeto producto
            })
            setCart(producto_En_Cart); // actualiza el producto en el carrito. devuelve un array
        }

    }
    const isInCart = (id) => {
        const producto_En_Carrito = cartCopiado.some(producto => producto.id === id);
        return producto_En_Carrito

    }

    const eliminarProducto = (itemId) => {
        setCart([...cartCopiado.filter(prod => prod.id !== itemId)]);

    }
    const vaciarCarrito = () => {
        setCart([]);
    }
    const finalizarCompra = () => {
        alert("Gracias por su compra");
        setTimeout(() =>{
            push("/");
        },2000);
    }
    const valor_De_contexto = {
        cart: cart,
        agregarProducto: agregarProducto,
        eliminarProducto: eliminarProducto,
        vaciarCarrito: vaciarCarrito,
        finalizarCompra: finalizarCompra
    }


    return (
        <Provider value={valor_De_contexto}>
            {children}
        </Provider>
    )
}
export default CustonProvider;