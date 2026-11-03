interface Props {
  nombre: string;
  curso: string;
  ciudad: string;
}

function TarjetaPersonal({ nombre, curso, ciudad }: Props) {
  return (
    <div className="card">
      <h4>{nombre}</h4>
      <p>{curso}</p>
      <p>{ciudad}</p>
    </div>
  );
}

export default TarjetaPersonal;
