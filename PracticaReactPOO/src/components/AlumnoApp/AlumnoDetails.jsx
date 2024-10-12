import PropTypes from 'prop-types'
export const AlumnoDetails = ({codigo,nombre,nota1,nota2,resultado}) => {
  return (
    <div>
        <p>Codigo:{codigo}</p>
        <p>Nombre : {nombre}</p>
        <p>Nota 1 : {nota1}</p>
        <p>Nota 2 : {nota2}</p>
        <p>Promedio : {resultado}</p>
      </div>
  )
}
AlumnoDetails.propTypes ={
    codigo:PropTypes.string.isRequired,
    nombre:PropTypes.string.isRequired,
    nota1:PropTypes.string.isRequired,
    nota2:PropTypes.string.isRequired,
    resultado:PropTypes.string.isRequired
}
