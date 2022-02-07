import PropTypes from 'prop-types';

function Button(props) {
  const { name, className } = props;
  return <button className={className} type="button">{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  name: '0',
  className: 'btn',
};

export default Button;
