import { Link } from "react-router-dom"
const Item = ({ item }) => {
    return (
        <div className="item">
            <div className="card-item">
                    <img src={item.img} width="240" height="250" alt="Foto de motorola" />
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                    <Link to={`/producto/${item.id}`}><button id={item.id}>Ver detalle del producto</button></Link>
            </div>
        </div>
    )


}

export default Item
