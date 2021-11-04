import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
const Nav = () => {
    return (
        <>
        <nav className="nav-header">
            <ul className="nav-ul">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/categorias">Categorias</Link></li>
            </ul>
            <CartWidget/>
        </nav>
        </>
    )
}

export default Nav
