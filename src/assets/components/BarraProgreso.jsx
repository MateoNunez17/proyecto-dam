function BarraProgreso({ porcentaje }) {
  return (
    <div style={{ width: "100%", backgroundColor: "#ddd", height: "20px" }}>
      <div
        style={{
          width: `${porcentaje}%`,
          height: "100%",
          backgroundColor: porcentaje < 50 ? "yellow" : "green",
        }}
      />
    </div>
  );
}

export default BarraProgreso;
