import PropTypes from 'prop-types'

export const FilmacionDetails = ({codigo,titulo,duracion,precio}) => {
  return (
    <div>
        <p>Codigo: {codigo}</p>
        <p>Titulo : {titulo}</p>
        <p>Duracion en minutos : {duracion}</p>
        <p>Precio en Dolares : ${precio}</p>
      </div>
  )
}
FilmacionDetails.propTypes={
    codigo:PropTypes.string.isRequired,
    titulo:PropTypes.string.isRequired,
    duracion:PropTypes.string.isRequired,
    precio:PropTypes.string.isRequired
}
