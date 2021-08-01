import './Form.css';
import RGB from './RGB/RGB';
import Error from './Error/Error';

import { PropTypes } from 'prop-types';

export default function Form({backgroundChange, hex, isHex}){
    const handleSubmit = (e) => {
        e.preventDefault();
        const reg = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.test(str);
        if (reg) {
            backgroundChange({
                hex: str,
                isHex: reg,
            });
        } else {
            backgroundChange({
                hex: '#fff',
                isHex: reg,
            });
        }
    };
    let str;
    const handleInput = (e) => {
        str = e.target.value;
    };
    return (
        <form className='Form' onSubmit={handleSubmit}>
            <input 
            className='Form-input' 
            name='hex'
            onChange={handleInput}
            />
            {isHex === true ? <RGB hex={hex} /> 
            : isHex === false ? <Error />
            : false
            }
        </form>
    );
}

Form.propTypes = {
    backgroundChange: PropTypes.func.isRequired,
    hex: PropTypes.string.isRequired,
    isHex: PropTypes.bool,
}

Form.defaultProps = {
    isHex: undefined,
}