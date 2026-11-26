function Producto({ nombre, precio, disponible }) {
  return (
    <div className="producto">
      <h3>{nombre}</h3>

      {disponible && <p>Precio: {precio} €</p>}

      <p style={{ color: disponible ? "green" : "red" }}>
        {disponible ? "En Stock" : "Agotado"}
      </p>
    </div>
  );
}

export default Producto;