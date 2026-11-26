function Entradas ({pelicula, precio, cantidad, descuento = 0}) {
    function calcularTotal() {
        const subtotal = precio * cantidad;
        return subtotal -  (subtotal * descuento) / 100
    }
    return (
        <div>
            <h1>Pelicula: {pelicula} </h1>
            <p>Precio: {precio} </p>
            <p>Cantidad: {cantidad} </p>
            <p>Descuento: {descuento} </p>
            <p>Precio Final: {calcularTotal()} </p>
        </div>
    )
}

export default Entradas;    