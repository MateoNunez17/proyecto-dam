

function BotonAccion({texto, color}) {
    return(
        <button style={{ backgroundColor: color, color: "black", width: "200px", height: "50px"}}>
            {texto}
        </button>
    )
}

export default BotonAccion;