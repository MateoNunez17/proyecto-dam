


function TarjetaPersonal({ nombre, curso, ciudad }) {
  return (
    <div className="card">
      <h4>{nombre}</h4>
      <p>{curso}</p>
      <p>{ciudad}</p>
    </div>
  );
}

export default TarjetaPersonal;

