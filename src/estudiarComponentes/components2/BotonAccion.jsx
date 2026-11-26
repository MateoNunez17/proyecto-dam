function BotonAccion({ texto = "Aceptar", clase = "btn-primario", onClick }) {
  return (
    <button className={`btn ${clase}`} onClick={onClick}>
      {texto}
    </button>
  );
}

export default BotonAccion;