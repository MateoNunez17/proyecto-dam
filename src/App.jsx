import "./App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Main from "./assets/components/Main";
import Boton from "./assets/components/Boton";
import TarjetaBienvenida from "./assets/components/TarjetaBienvenida";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Main />

      <TarjetaBienvenida usuario="Mateo" />
      <TarjetaBienvenida usuario="Franchesco" />
      <TarjetaBienvenida usuario="Tomy" />
      
      <Boton name="ACEPTAR"  />
      <Boton name="CANCELAR" color="red" />

      <Footer />
    </div>
  );
}

export default App;


