const EjemploProps1= props =>{
return(
    <h3>Hola {props.nombre}</h3>
)
}

const EjemploProps2= props =>{
    
    const{elementos}= props;

    return(
        <ul>{elementos.map(eLemento =><li key={eLemento}> {eLemento}</li>)}</ul>
    )
    }


export{
    EjemploProps1,
    EjemploProps2
}