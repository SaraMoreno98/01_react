// Podemos crear otro componente en el mismo archivo e eimportarlo
const Boton = () => {
    return (
        <button>Soy un componente</button>
    )
}

export const ContadorApp = () => {
    const contador = () => {
        console.log('Soy un botón')
    }

    const contador2 = (event) => {
        console.log(event)
    }

    const handleClick = (event, argumento) => {
        console.log(argumento)
    }

    return (
    <>
        <h1>Contador</h1>
        {/* ESTA ES UNA MANERA DE LLAMAR A UNA FUNCION */}
            {/* <button onClick={function(){
                console.log('Soy un botón')
            }}>Soy un botón</button> */}
        <button onClick={contador}>Soy un botón</button>
        <button onClick={contador2}>Soy otro botón</button>
        {/* Si necesitamos pasar mas info hay que poner la sintaxis completa */}
        <button onClick={(event) => handleClick(event, "Pulsaste el tercer botón")}>Tercer botón</button>
        {/* Importo el componente de arriba */}
        <Boton/>
    </>
  )
}