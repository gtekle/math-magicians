import PropTypes from 'prop-types';

function Display(props) {
  const { text } = props;
  return (
    <div className="display">{text || 0}</div>
  );
}

Display.propTypes = {
  text: PropTypes.string,
};

Display.defaultProps = {
  text: 0,
};

export default Display;
