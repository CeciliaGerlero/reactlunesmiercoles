
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (

        <nav>
            <ul>
                {/* <p>hola soy la navegacion</p> */}

                <li><Link to="/">Home</Link></li>
                <li><Link to="/Ejemplo1">Ejemplo 1</Link></li>
                <li><Link to="/Ejemplo2">Ejemplo 2</Link></li>
                <li><Link to="/Ejemplo3">Ejemplo 3</Link></li>
                <li><Link to="/Ejemplo4">Ejemplo 4</Link></li>
                <li><Link to="/Ejemplo5">Ejemplo 5</Link></li>

            </ul>

        </nav>
    )
}

export default Nav;