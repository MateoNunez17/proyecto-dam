import "./component/Login.css";
import CampoTexto from "./component/CampoTexto";
import BotonFigma from "./component/BotonFigma";


function Login() {
  const manejarEnvio = (e) => {
    e.preventDefault();
    alert("Iniciando sesion..");
  };

  const manejarCancelar = () => {
    alert("Operacion cancelada");
  };

  return (
    <form className="contenedor-login" onSubmit={manejarEnvio}>
      <h2>Iniciar Sesion</h2>

      <CampoTexto etiqueta="Usuario" />
      <CampoTexto etiqueta="Contraseña" tipo="password" />

      <BotonFigma tipo="submit" />
      <BotonFigma texto="Cancelar" clase="btn-secundario" onClick={manejarCancelar} />
    </form>
  );
}

export default Login;