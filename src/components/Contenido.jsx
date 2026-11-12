function Contenido ({nombre}) {
    
   {/* const fechaActual = new Date().toLocaleDateString('es-ES');*/}

    return (
    <div>
    <h1>Este es el contenido de {nombre}</h1>
        <p> Todas los ejercicios de clase estan aqui, hechos al día {/*{fechaActual}*/}</p>
    </div>
);    
}

export default Contenido;