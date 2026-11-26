function Alerta({ texto, tipo, mostrarIcono = false }) {
  const colores = {
    info: "lightblue",
    error: "lightcoral",
    exito: "lightgreen",
  };

  const iconos = {
    info: "ℹ️",
    error: "❌",
    exito: "✅",
  };

  return (
    <div
      style={{
        backgroundColor: colores[tipo],
        padding: "10px",
        borderRadius: "8px",
        marginBottom: "10px",
      }}
    >
      {mostrarIcono && iconos[tipo]} {texto}
    </div>
  );
}

export default Alerta;