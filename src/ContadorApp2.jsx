import {useState} from "react"
import PropTypes from 'prop-types'

// value = 0 -> Si no recibo value su valor por defecto será 0
export const ContadorApp2 = ({value = 0}) => {
    /**
     * useState es una función que sirve para controlar el valor o estado de una variable
     * useState (valor inicial)
     * Devuelve la variable y una función para modificar el estado de la variable
     */
    const [contador, setContador] = useState(value)

    const contadorClicks = () => {
        setContador(contador + 1)
    }
  return (
    <>
        <h1>Contador:</h1>
        <p>{contador}</p>
        <button onClick={contadorClicks}>Contador de clicks</button>
    </>
  )
}

ContadorApp2.prototypes = {
    value: PropTypes.number
}