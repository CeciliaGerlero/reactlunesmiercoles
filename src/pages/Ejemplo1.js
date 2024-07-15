import { EjemploProps1, EjemploProps2 } from "../componentes/Props";

const nombre2 = "Lucas";

const frutas = ['Manzanas', 'Bananas', 'Naranjas', 'Paltas']

const equipos = ['Argentna', 'Colombia', 'Uruguay', 'Canada']
const Ejemplo1 = (props) => {
    return (

        <div>
            <h1>Ejemplos de propiedades</h1>
            { /* con esto aparece ele HOLA */}
            <EjemploProps1 nombre="MCG" />
            <EjemploProps1 nombre={nombre2} />

            {/* listar elempleo del props2 */}
            <EjemploProps2 elementos={frutas} />
            <EjemploProps2 elementos={equipos} />
        </div>


    )
}

export default Ejemplo1;

