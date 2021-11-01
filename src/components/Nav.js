import CartWidget from "./CartWidget"
const Nav = () => {
    return (
        <>
        <nav className="nav-header">
            <ul className="nav-ul">
                <li>Inicio</li>
                <li>Categorias</li>
            </ul>
            <CartWidget/>
        </nav>
        </>
    )
}

export default Nav
