function EquipoFutbol ({nombre, fundacion, contenido, trofeos, resumen}) {

    return(
        <div>
            <h1>{nombre}</h1>
            <p>Fue fundado en: {fundacion}</p>
            <p>{contenido}</p>
            <p>Tiene {trofeos} Titulos a nivel nacional</p>
            <p>{resumen}</p>
        </div>
    )
}

export default EquipoFutbol;