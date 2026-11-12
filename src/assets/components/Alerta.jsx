function Alerta({ texto, tipo = "info", mostrarIcono = false }) {
  const estilosPorTipo = {
    info: { fondo: "#2196F3", icono: "ℹ️" },
    error: { fondo: "#f44336", icono: "❌" },
    exito: { fondo: "#4CAF50", icono: "✅" },
  };

  const actual = estilosPorTipo[tipo] || estilosPorTipo.info;

  return (
    <div
      style={{ backgroundColor: actual.fondo, color: "white", padding: "12px 16px", margin: "10px 0", fontFamily: "system-ui, sans-serif",
         display: "flex", alignItems: "center", }}>
      {mostrarIcono && (
        <span style={{ marginRight: "8px", fontSize: "1.2rem" }}>
          {actual.icono}
        </span>
      )}

      <span>{texto}</span>
    </div>
  );
}

export default Alerta;
