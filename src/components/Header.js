import { Link } from "react-router-dom"
import Nav from "./Nav"

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="title-logo">Celulandia</Link>
            <Nav/>
        </header>
    )
}
export default Header   