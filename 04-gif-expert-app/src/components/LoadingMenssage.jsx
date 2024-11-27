import PropType from 'prop-types'
export const LoadingMenssage = ({loading}) => {
  return (
    <>
     { loading && <p style={{color:'blue', fontFamily:"cursive" ,fontSize:'30px' }}>Loading...</p> }
    </>
  );
};
LoadingMenssage.propTypes={
    loading:PropType.bool.isRequired
}
