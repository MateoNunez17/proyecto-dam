function BarraProgreso({ porcentaje }) {
  return (
    <div style={{ width: "100%", backgroundColor: "#ddd", height: "20px", borderRadius: "5px" }}>
      
      <div 
        style={{ 
          width: `${porcentaje}%`, 
          height: "100%", 
          backgroundColor: porcentaje < 50 ? "yellow" : "green",
          borderRadius: "5px"
        }}
      />
      
    </div>
  );
}

export default BarraProgreso;