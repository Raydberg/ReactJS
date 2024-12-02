import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <h1>{subTitle}</h1>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
FirstApp.defaultProps = {
  title: "No hay titulo",
  subTitle: "ryam",
};
