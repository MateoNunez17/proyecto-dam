import "./App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Main from "./assets/components/Main";
import TarjetaPersonal from "./assets/components/TarjetaPersonal";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Main />
      <TarjetaPersonal
        nombre="Mateo Franchesco"
        curso="2º DAM"
        ciudad="Madrid"
      />
      <Footer />
    </div>
  );
}

export default App;
