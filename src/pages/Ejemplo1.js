import { EjemploProps1, EjemploProps2, EjemploProps3, EjemploProps4, EjemploProps5 } from "../componentes/Props";

const nombre2 = "Lucas";

const frutas = ['Manzanas', 'Bananas', 'Naranjas', 'Paltas']

const equipos = ['Argentna', 'Colombia', 'Uruguay', 'Canada', 'Chile']

const mostrarValor = valor => {
    console.log(valor)
}

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
            <EjemploProps3 titulo='Hola soy le titulo' subtitulo="Soy el subtitulo" cuerpo="soy e contenido de esta noticia" />
            {/* funcion */}
            <EjemploProps4 cambiarvalor={mostrarValor} />
            {/* este no anda porque si o si necesita cambiar valor */}
            <EjemploProps4 />
            {/* pasar una funcion vacia */}
            <EjemploProps4 cambiarvalor={() => { }} />
            <EjemploProps5 eventoClick={mostrarValor}/>
            {/* sino le coloque la props eventoClick no se exploto react a diferecia */}
            <EjemploProps5 />

>
        </div>


    )
}

export default Ejemplo1;

