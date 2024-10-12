import PropTypes from 'prop-types';
export const LayoutLabel = ({
  nameLabel,
  name,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={name}>{nameLabel}</label>
      <input
        className="bg-slate-500 text-white mb-1 p-1 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-slate-300"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
LayoutLabel.propTypes = {
  nameLabel:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  type:PropTypes.string
}