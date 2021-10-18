import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"
const Nav = () => {
    return (
        <>
        <nav className="nav-header">
            <ul className="nav-ul">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Marca</a></li>
            </ul>
            <CartWidget/>
        </nav>
        <ItemListContainer contador={0}/>
        </>
    )
}

export default Nav
