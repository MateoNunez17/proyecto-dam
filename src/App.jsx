import "./App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Boton from "./assets/components/Boton";
import TarjetaBienvenida from "./assets/components/TarjetaBienvenida";
import Producto from "./assets/components/ProductoCard";
import BarraProgreso from "./assets/components/BarraProgreso";
function App() {
  return (
    <div className="app-container">
    
{/* header */}  
      <Header />

{/* tarjetas de bienvenida */}  
      <TarjetaBienvenida usuario="Mateo" />
      <TarjetaBienvenida usuario="Franchesco" />
      <TarjetaBienvenida usuario="Tomy" />
      
{/* botones */}   
      <Boton name="ACEPTAR"  />
      <Boton name="CANCELAR" color="red" />
      
{/* productos */}
      <div className="contenedor-horizontal">
      <Producto nombre="Camiseta" precio={19.99} disponible={true} />
      
      <Producto nombre="Pantalón" precio={29.99} disponible={false} />

      <Producto nombre="Zapatos" precio={49.99} disponible={true} />
      </div>

{/* barras de progreso */}
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Barras de Progreso</h1>

        <p>Progreso al 35%:</p>
        <BarraProgreso porcentaje={35} />

        <p>Progreso al 50%:</p>
        <BarraProgreso porcentaje={50} />
    </div>

{/* footer */}      
      <Footer />
    </div>
  );
}

export default App;


