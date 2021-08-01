import './RGB.css';

import { PropTypes } from 'prop-types';

export default function RGB({ hex }) {
  const color = () => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
      : null;
  };
  return (
    <div className="Form-RGB-container">
      <span>{color()}</span>
    </div>
  );
}

RGB.propTypes = {
    hex: PropTypes.string.isRequired,
};
