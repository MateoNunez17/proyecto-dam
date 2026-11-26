function BarraProgreso({ porcentaje }) {
  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "lightgray",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          width: `${porcentaje}%`,
          height: "20px",
          backgroundColor: porcentaje < 50 ? "yellow" : "green",
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
}

export default BarraProgreso;