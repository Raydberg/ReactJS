import PropTypes from 'prop-types'
export const CalculatorDetails = ({peso,estatura,IMC}) => {
  return (
    <div>
    <p>Peso : {peso}</p>
    <p>Estatura :{estatura}</p>
    <p>IMC : {IMC}</p>
  </div>
  )
}
CalculatorDetails.propTypes = {
    peso: PropTypes.string.isRequired,
    estatura: PropTypes.string.isRequired,
    IMC: PropTypes.string.isRequired
}
