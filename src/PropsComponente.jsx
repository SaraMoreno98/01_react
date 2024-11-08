import PropTypes from 'prop-types'

export const PropsComponente = ({titulo, subtitulo, numero = 0}) => {
  return (
    <>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        <p>{numero}</p>
    </>
  )
}

PropsComponente.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
    numero: PropTypes.number
}

PropsComponente.defaultProps = {
    titulo: "Soy un título alternativo",
    subtitulo: "Y yo un subtítulo por defecto"
}