
const Item = ({item}) => {
    return(
        <section>
            <img src={item.img} alt="Foto de motorola"/>
            <p>{item.title}</p>
            <p>${item.price}</p>
            <button>Ver detalle del producto</button>
        </section>
    )
    
        
}

export default Item
