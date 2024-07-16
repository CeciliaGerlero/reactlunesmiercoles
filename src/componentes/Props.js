

const EjemploProps1 = props => {
    return (
        <h3>Hola {props.nombre}</h3>
    )
}

const EjemploProps2 = props => {

    const { elementos } = props;

    return (
        <ul>{elementos.map(eLemento => <li key={eLemento}> {eLemento}</li>)}</ul>
    )
}

const EjemploProps3 = ({ titulo, subtitulo, cuerpo }) => {


    return (
        <div className="noticias">
            <h4>{titulo}</h4>
            <h5>{subtitulo}</h5>
            <p>{cuerpo}</p>
        </div>
    )
}

const EjemploProps4 = props => {

    return (
        <label>ver la consola
            <input type="text" onChange={(e) => props.cambiarvalor(e.target.value)} />
        </label>
    )
}

const EjemploProps5 = props =>{

    // validacion para evitar errores
    const handerClick = e => {
        if(props.eventoClick) {
            props.eventoClick('me cliqueaste')
        }
    }
    return (
        <p><button onClick={handerClick}>CLiqueame!!</button></p>
    )
}

export {
    EjemploProps1,
    EjemploProps2,
    EjemploProps3,
    EjemploProps4,
    EjemploProps5
}