function Roles ({nombre, rol, edad }){
    function obtenerMensaje () {
        return `${nombre} - ${rol} - ${edad} años`
    }
    return (
        <div>
            <h2>{obtenerMensaje()}</h2>
        </div>
    )
}

export default Roles;