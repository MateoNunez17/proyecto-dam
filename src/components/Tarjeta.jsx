

function Tarjeta({ producto, precio, cantidad, infoAdicional }) {
  function alEntrarRaton() {
    const cajaInfo = document.getElementById("info-" + producto);
    cajaInfo.innerHTML = `<p>${infoAdicional}</p>`;
  }

  function alSalirRaton() {
    const cajaInfo = document.getElementById("info-" + producto);
    cajaInfo.innerHTML = "";
  }

  function alHacerClick() {
    alert("Has seleccionado: " + producto);
  }

  return (
    <div 
      className="tarjeta" 
      onMouseEnter={alEntrarRaton} 
      onMouseLeave={alSalirRaton}>
      <h3>{producto}</h3>
      <p>Precio: {precio}€</p>
      <p>Cantidad: {cantidad}</p>

      <div id={"info-" + producto}></div>

      <button onClick={alHacerClick}>Comprar</button>
      <p id={"mensaje-" + producto}></p>
    </div>
  );
}

export default Tarjeta;