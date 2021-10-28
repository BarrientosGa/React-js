const Item = ({ item }) => {
    return (
        <div className="item">
            <div className="card-item">
                    <img src={item.img} width="240" height="250" alt="Foto de motorola" />
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                    <button>Ver detalle del producto</button>
            </div>
        </div>
    )


}

export default Item
