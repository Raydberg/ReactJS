import PropTypes from 'prop-types';
export const LayoutButton = ({title,onClick}) => {
    return (
      <button onClick={onClick} className="btn-hover-effect flex justify-center border w-24 border-white border-solid mt-4 rounded-md">
           {title}
      </button>
    )
  }
  LayoutButton.propTypes ={
    title:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired
  }