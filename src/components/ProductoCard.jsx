function Producto({ nombre, precio, disponible }) {
  

  function onMensaje(){
    const mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "<span><h2>Has pulsado el botón</h2></span>";
  }

  return (
    <div className="producto-card">
      <h3>{nombre}</h3>
      {disponible && <p>Precio: {precio}€</p>}
      {disponible ? (
        <p style={{ color: "green" }}>En Stock</p>
      ) : (
        <p style={{ color: "red" }}>Agotado</p>
      )}

      <button onClick={onMensaje}>Mensaje</button>
      <p id="mensaje"></p>
    </div>
  );
}

export default Producto;
