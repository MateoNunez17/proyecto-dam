

function Descuento({ producto, precio, descuentos }) {
  function precioTotal() {
    return precio - (precio * descuentos) / 100;
  }

  return (
    <div>
      <h1>El producto es: {producto}</h1>
      <p>Su precio es: {precio}&euro;</p>
      <p>Su descuento es: {descuentos}%</p>
      <h2>Precio con descuento total: {precioTotal()}&euro;</h2>
    </div>
  );
}

export default Descuento;