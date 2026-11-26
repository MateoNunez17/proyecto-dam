function CampoTexto({ etiqueta, tipo = "text", placeholder = "" }) {
  return (
    <div className="grupo-campo">
      <label>{etiqueta}</label>
      <input type={tipo} placeholder={placeholder} />
    </div>
  );
}

export default CampoTexto;