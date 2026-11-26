import { useState } from "react";

function Tarjeta({ producto, precio, cantidad }) {
  const [encima, setEncima] = useState(false);

  const manejarClick = () => {
    alert("Producto añadido");
  };

  return (
    <div
      className="tarjeta"
      onMouseEnter={() => setEncima(true)}
      onMouseLeave={() => setEncima(false)}
    >
      <h3>{producto}</h3>

      {encima ? (
        <p>Información adicional</p>
      ) : (
        <>
          <p>Precio: {precio} €</p>
          <p>Cantidad: {cantidad}</p>
        </>
      )}

      <button onClick={manejarClick}>Comprar</button>
    </div>
  );
}

export default Tarjeta;