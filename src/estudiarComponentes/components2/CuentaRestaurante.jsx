function CuentaRestaurante ({restaurante, importe, propina}) {
    function pagoTotal() {
        return importe + (importe * propina) / 100;
    }
    
    return(

        <div>
            <h1>Restaurante: {restaurante}</h1>
            <p>Importe: {importe}&euro;</p>
            <p>Propina: {propina}%</p>
            <p>Total a pagar: {pagoTotal()}&euro;</p>
        </div>
    )
}

export default CuentaRestaurante;