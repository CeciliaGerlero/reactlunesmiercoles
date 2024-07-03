
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (

        <nav>
            <ul>
                {/* <p>hola soy la navegacion</p> */}

                <li><Link to="/">Home</Link></li>
                <li><Link to="/Ejemplo1">Ejemplo 1</Link></li>
            </ul>

        </nav>
    )
}

export default Nav;