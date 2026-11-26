function Personal ({ nombre, apellido, edad, saldo, observacion   }) {

    function recortarSaldo() {
        return saldo - (saldo * 4)/100
    }

    return (
        <div>
            <h1>{nombre}</h1>
            <p>{apellido}</p>
            <p>{edad}</p>
            <p>{recortarSaldo()}</p>
            <p>{observacion}</p>
        </div>
    )
}

export default Personal;