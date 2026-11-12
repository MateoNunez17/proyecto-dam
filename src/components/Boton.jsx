
// {name, color="white"}

function Boton( {name, color}) {

  return (
        <button className="boton" style={{backgroundColor: color || "green"}} > {name} </button>
  );

}


export default Boton; 

