function ProductoIva ({nombre, precio, iva}){
    function obtenerIva() {
        return precio + (precio * iva) / 100;
    }
    return(
        <div>
            <h1>Producto: {nombre} </h1>
            <p>Precio: {precio}&euro; </p>
            <p>IVA: {iva}% </p>
            <p>Precio con IVA: {obtenerIva()}&euro;</p>
        </div>
    )
} 

export default ProductoIva;