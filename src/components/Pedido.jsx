function Pedido ({producto, cantidad, precio}) {
    function calcularTotal() {
        return cantidad * precio;
    }

    return (
    <div>
        <p>Producto: {producto}</p>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: {precio}€</p>
        <p>Total: {calcularTotal()}€</p>
    </div>
    
    );
}
export default Pedido;