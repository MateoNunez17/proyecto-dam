import Alerta from "./components/Alerta";
import Alumno from "./components/Alumno";
import BarraProgreso from "./components/BarraProgreso";
import BotonAccion from "./components/BotonAccion";
import CuentaRestaurante from "./components/CuentaRestaurante";
import Descuento from "./components/Descuento";
import Entrada from "./components/Entrada";
import Entradas from "./components/Entradas";
import EquipoFutbol from "./components/EquipoFutbol";
import Pedido from "./components/Pedido";
import Persona from "./components/Persona";
import Producto from "./components/Producto";
import ProductoIva from "./components/ProductoIva";
import Reserva from "./components/Reserva";
import Roles from "./components/Roles";
import Tarjeta from "./components/Tarjeta";
import Viaje from "./components/Viaje";

function App () {

  function manejarAceptar() {
    alert("Aceptado");
  }

  function manejarRechazar() {
    alert("Rechazado");
  }

  return (
    <div>
    <Descuento producto="Monitor" precio={200} descuentos={10} />

    <Roles nombre="Mateo" rol="Mediocentro" edad="20"/>

    <EquipoFutbol 
        nombre="Club Alianza Lima"
        fundacion={1901}
        contenido="Uno de los clubes más populares y tradicionales del fútbol peruano, con sede en el distrito de La Victoria."
        trofeos={25}
        resumen="Conocidos como los Íntimos o Blanquiazules, juegan de local en el Estadio Alejandro Villanueva (Matute)."
      />

    <ProductoIva nombre="Pantalla" precio={50} iva={21} />

    <CuentaRestaurante restaurante="La Taberna" importe={50} propina={10} />

    <Persona nombre="Mateo" ciudad="Madrid"/>

    <Alumno nombre="Mateo" curso="DAM"/>

    <Entrada pelicula="Son como niños 2" cantidad={4} precio={9}/>
    
    <Reserva hotel="Sol" noches={5} precioNoche={80} />

    <Viaje destino="Barcelona" distanciaKm={600} velocidadPromedio={100} />


     <div>
      <Entradas pelicula="Dune" precio={10} cantidad={3} descuento={10} />
      <Entradas pelicula="Shrek" precio={8} cantidad={2} />
    </div>

     <div>
      <Tarjeta producto="Monitor" precio={200} cantidad={5} />
    </div>

    <Producto nombre="Monitor" precio={200} disponible={true} />
<Producto nombre="Teclado" precio={50} disponible={false} />

    <div>
      <BarraProgreso porcentaje={30} />
      <br />
      <BarraProgreso porcentaje={80} />
    </div>

    <div>
      <Alerta texto="Información importante" tipo="info" mostrarIcono={true} />
      <Alerta texto="Algo salió mal" tipo="error" mostrarIcono={true} />
      <Alerta texto="Todo correcto" tipo="exito" />
    </div>

    <div>
      <Pedido producto="Libro" cantidad={3} precio={20} />
      <Pedido producto="Cuaderno" cantidad={2} precio={5} stock={false} />
    </div>


    <div>
      <BotonAccion onClick={manejarAceptar} />
      <BotonAccion
        texto="Rechazar"
        clase="btn-secundario"
        onClick={manejarRechazar}
      />
    </div>


    </div>
  )
}

export default App;