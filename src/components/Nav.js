import CartWidget from "./CartWidget"
const Nav = () => {
    return (
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Marca</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default Nav
