import "./App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Main from "./assets/components/Main";
import Boton from "./assets/components/Boton";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Main />

      <Boton name="ACEPTAR"  />
      <Boton name="CANCELAR" color="orange" />

      <Footer />
    </div>
  );
}

export default App;


