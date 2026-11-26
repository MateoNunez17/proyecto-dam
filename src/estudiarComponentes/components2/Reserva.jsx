function Reserva({hotel, noches, precioNoche}) {
   function obtenerTotal(){
        return  (noches * precioNoche)
   }
   
    return(
        <div>
            <h1>Hotel: {hotel}</h1>
            <p>Noches: {noches}</p>
            <p>Precio por Noche: {precioNoche}&euro;</p>
            <h2>Total a pagar: {obtenerTotal()}&euro;</h2>
        </div>
    )
}
export default Reserva;