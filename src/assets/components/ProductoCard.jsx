

function Producto({ nombre, precio, disponible }) {
  return (
    <div className="producto-card">
      <h3>{nombre}</h3>
      {disponible && <p>Precio: ${precio}</p>}
      {disponible ? (
        <p style={{ color: "green" }}>En Stock</p>
      ) : (
        <p style={{ color: "red" }}>Agotado</p>
      )}
    </div>
  );
}

export default Producto;