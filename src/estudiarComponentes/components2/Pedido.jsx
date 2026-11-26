function Pedido({ producto, cantidad = 0, precio = 0, stock = true }) {
  function calcularTotal() {
    return cantidad * precio;
  }

  return (
    <div className="pedido">
      <p>Producto: {producto}</p>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: {precio} €</p>

      {stock ? (
        <>
          <p>Total: {calcularTotal()} €</p>
          <p style={{ color: "green" }}>Disponible</p>
        </>
      ) : (
        <p style={{ color: "red" }}>Sin stock</p>
      )}
    </div>
  );
}

export default Pedido;