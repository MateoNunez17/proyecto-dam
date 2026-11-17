function ProductoDescuento({ nombre, precio, descuento }) {
  function precioConDescuento (){
    return precio - (precio * descuento) / 100; 
  } 

    return (
    <div className="producto-descuento">    

        <h2>Producto: {nombre}</h2>
        <p>Precio: {precio}€</p>
        <p>Descuento: {descuento}%</p>
        <p>Precio final: {precioConDescuento()}€</p>
    </div>
);    
}   

export default ProductoDescuento;

