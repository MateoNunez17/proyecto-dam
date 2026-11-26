function Persona ({nombre, ciudad}) {

    function obtenerMensaje() {
        return `Hola, ${nombre} de ${ciudad}`
    }

    return(

        <div>
            <h1>{obtenerMensaje()}</h1>
        </div>
    )
}

export default Persona;