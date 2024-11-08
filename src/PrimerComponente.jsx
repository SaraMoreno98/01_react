const texto = 'Esto es un texto'
const numero = 230
const booleano = true
// ESTO FUNCIONA COMO UNA FUNCTION
// Cuando una función tiene una línea podemos ahorrarnos las llaves y el return
const sumar = () => 3 + 6
const sumar2 = () => {return 4 + 8}

function sumar3(){
    return 6 + 80
}

const objeto = {
    nombre: 'Pepa',
    edad: 33,
}
const fecha = new Date()

export const PrimerComponente = () => {
  return (
    <> 
        <h1>Hola desde React</h1>
        <p>Estoy aprendiendo React</p>
        <p>El valor de la variable es: {texto}</p>
        <h2>El número es {numero}</h2>
        <h2>El valor del booleano es {booleano}</h2>
        {/* Para que se muestre la funcion hay que ejecutarla, poner los paréntesis: function() */}
        <h2>El resultado de la suma 1 es: {sumar()}</h2>
        <h2>El resultado de la suma 2 es: {sumar2()}</h2>
        <h2>El resultado de la suma 3 es: {sumar3()}</h2>
        <h2>El nombre del objeto es {objeto.nombre} que tiene {objeto.edad}</h2>
        <h2>{JSON.stringify(objeto)}</h2>
        <h2>Fecha: {JSON.stringify(fecha)}</h2>
    </>
  )
}