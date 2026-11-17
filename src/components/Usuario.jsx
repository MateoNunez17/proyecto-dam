function Usuario ({nombre, rol}) { 
    function obtenerMensaje() {
        return `${nombre} - ${rol}`;
    }

    return (
    <div>
        <h1>{obtenerMensaje()}</h1>
    </div>
);    

}   
 
export default Usuario;

