function BotonFigma({ texto = "Entrar", clase = "btn-primario", tipo = "button", onClick }) {
  return (
    <button type={tipo} className={`btn ${clase}`} onClick={onClick}>
      {texto}
    </button>
  );
}

export default BotonFigma;