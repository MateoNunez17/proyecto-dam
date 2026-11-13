import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Boton from "./components/Boton";
import TarjetaBienvenida from "./components/TarjetaBienvenida";
import Producto from "./components/ProductoCard";
import BarraProgreso from "./components/BarraProgreso";
import Alerta from "./components/Alerta";
import BotonAccion from "./components/BotonAccion";
import Contenido from "./components/Contenido";
import Tarjeta from "./components/Tarjeta";

function App() {
  return (
    <div className="app-container">
      <Header />
  
      <div className="nombre-contenido">
            <Contenido nombre="Mateo Franchesco" />
      </div>

      <div className="tarjeta">
        <h1>Tarjetas de bienvenida</h1>
      <TarjetaBienvenida usuario="Mateo" />
      <TarjetaBienvenida usuario="Franchesco" />
      <TarjetaBienvenida usuario="Tomy" />
      </div> 

      <h1 style={{ textAlign: "center", fontSize: 50 }}>Botones</h1>
      <Boton name="ACEPTAR" />
      <Boton name="CANCELAR" color="red" />

      {/* productos */}
      <h1 style={{ textAlign: "center" }}>Tarjeta de productos</h1>
      <div className="contenedor-horizontal">
        <Producto nombre="Camiseta" precio={19.99} disponible={true} />
        <Producto nombre="Pantalón" precio={29.99} disponible={false} />
        <Producto nombre="Zapatos" precio={49.99} disponible={true} />
      </div>

      {/* barras de progreso */}
      <div style={{ textAlign: "center", padding: "150px" }}>
        <h1>Barras de Progreso</h1>

        <p>Progreso al 35%:</p>
        <BarraProgreso porcentaje={35} />
        <p>Progreso al 50%:</p>
        <BarraProgreso porcentaje={50} />
      </div>

      {/* alerta */}
      <div className="alertas">
        <h2>Prueba de Alertas</h2>

        <Alerta
          texto="Este es un mensaje informativo."
          tipo="info"
          mostrarIcono={true} />
        <Alerta
          texto="Ha ocurrido un error en el sistema."
          tipo="error"
          mostrarIcono={true} />
        <Alerta texto="¡Operación realizada con éxito!" tipo="exito" />
      </div>

      {/* boton*/}
      <div className="prueba-boton-accion">
        <h2>Prueba de Boton de Accion</h2>
        <BotonAccion texto="Prueba de Boton de Accion" color="yellow" />
      </div>


      
      <div className="contenedor-tarjetas">
        <h1>Catálogo de Productos</h1>
        <Tarjeta 
          producto="Portátil" 
          precio={349.99} 
          cantidad={5} 
          infoAdicional="Informacion adicional: 16GB RAM y 512GB SSD" 
        />
        
        <Tarjeta 
          producto="Ratón" 
          precio={19.99} 
          cantidad={12} 
          infoAdicional="Informacion adicional: Inalambrico y ergonomico" 
        />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
