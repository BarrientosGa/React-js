import { Link } from "react-router-dom"
/* import productos_Json from "./productos.json" */
const Category = () => {


    return (
        <main className="main_category_logos">
            <Link to="/categorias/samsung"><img src="samsung_logo.png" alt="logo de samsung"/></Link>
            <Link to="/categorias/motorola"><img src="/logo_motorola.png" alt="logo de motorola"/></Link>
            <Link to="/categorias/lg"><img src="/logo_lg.png" alt="logo de lg"/></Link>
        </main>
    )
}

export default Category
