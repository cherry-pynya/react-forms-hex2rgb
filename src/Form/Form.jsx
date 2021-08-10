import './Form.css';
import RGB from './RGB/RGB';
import Error from './Error/Error';

import { PropTypes } from 'prop-types';

export default function Form({ backgroundChange, hex, isHex }) {
  const reg = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
  const handleInput = (e) => {
    if (e.target.value.length === 7) {
      const check = reg.test(
        e.target.value
      );
      if (check) {
        backgroundChange({
          hex: e.target.value,
          isHex: check,
        });
        return;
      }
      backgroundChange({
        hex: '#fff',
        isHex: check,
      });
    }
  };
  return (
    <form className='Form'>
      <input className='Form-input' name='hex' onChange={handleInput} />
      {isHex === true ? <RGB hex={hex} /> : isHex === false ? <Error /> : false}
    </form>
  );
}

Form.propTypes = {
  backgroundChange: PropTypes.func.isRequired,
  hex: PropTypes.string.isRequired,
  isHex: PropTypes.bool,
};

Form.defaultProps = {
  isHex: undefined,
};
