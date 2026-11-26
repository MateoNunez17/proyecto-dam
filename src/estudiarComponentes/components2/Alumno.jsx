function Alumno ({nombre, curso}){

    function obtenerMensaje(){
        return `${nombre} estudia ${curso}`
    }

    return(
        <div>
            <h1>{obtenerMensaje()}</h1>
        </div>
    )
}

export default Alumno;