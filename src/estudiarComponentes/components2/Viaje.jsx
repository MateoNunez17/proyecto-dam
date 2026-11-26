function Viaje({ destino, distanciaKm, velocidadPromedio }) {

    function calcularTiempo() {
        return distanciaKm / velocidadPromedio;
    }

    return (
        <div>
            <h2>Destino: {destino}</h2>
            <p>Distancia: {distanciaKm} km</p>
            <p>Velocidad promedio: {velocidadPromedio} km/h</p>
            <p>Tiempo estimado: {calcularTiempo()} horas</p>
        </div>
    )
}

export default Viaje;