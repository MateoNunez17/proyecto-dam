function Entrada ({ pelicula, cantidad, precio}) {
    function calcularTotal() {
        return (cantidad * precio)
    }
    
    
    return(
        <div>
            <h1>Pelicula: {pelicula}</h1>
            <p>Cantidad: {cantidad}</p>
            <p>Precio: {precio}&euro;</p>
            <h2>Total: {calcularTotal()}&euro;</h2>
        </div>
    )
}
export default Entrada;