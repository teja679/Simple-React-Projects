import React, { useState } from 'react'
import "./styles.css"
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 */
const Calculator = () => {
    const [inputValue, setInputValue] = useState('');

    const isOperator = (clickedBtn) => {
        return (clickedBtn === '/' || clickedBtn === '*'
            || clickedBtn === '+' || clickedBtn === '-' || clickedBtn === '%')
            ? true : false
    }
    const buttonClicked = (btn) => {
        if (inputValue.length > 14) {
            setInputValue('0');
        }
        else if (btn === 'CLR') {
            setInputValue('0');
        }
        else if (btn === 'DEL') {
            setInputValue(inputValue.slice(0, -1));
        }
        else if (btn === '=' && inputValue) {
            try {
                let answers = eval(inputValue);
                setInputValue(answers);
            }
            catch (err) {
                setInputValue('Error!');
                setTimeout(() => {
                    setInputValue('0');
                }, 500)
            }
        }
        else if (inputValue == '0') {
            if (btn === '0' || btn === '00' || isOperator(btn) || btn === 'DEL') {
            }
            else if (btn === '.') {
                setInputValue('0' + btn);
            }
            else setInputValue(btn);
        }
        else {
            if (isOperator(inputValue[inputValue.length - 1])
                && isOperator(btn)) {
                setInputValue(inputValue.slice(0, -1) + btn)
            }
            else if (btn === '.' && inputValue.includes('.')) {
                let x = inputValue
                if (x.lastIndexOf('.') < x.lastIndexOf('+') || x.lastIndexOf('.') < x.lastIndexOf('-') ||
                    x.lastIndexOf('.') < x.lastIndexOf('*') || x.lastIndexOf('.') < x.lastIndexOf('/') ||
                    x.lastIndexOf('.') < x.lastIndexOf('%')) {
                    x = x + btn
                }
                setInputValue(x);
            }
            else {
                setInputValue(inputValue + btn)
            }
        }
    }

    return (
        <div className="container">

            <div id="display">{inputValue}</div>
            <div className="buttons">
                <div className="button operator1" onClick={() => buttonClicked('CLR')}>CLR</div>
                <div className="button operator2" onClick={() => buttonClicked('DEL')}>{/* <FontAwesomeIcon icon="fa-brands fa-react" /> */}DEL</div>
                <div className="button operator2" onClick={() => buttonClicked('%')}>%</div>
                <div className="button operator2" onClick={() => buttonClicked('/')}>/</div>
                <div className="button" onClick={() => buttonClicked('7')}>7</div>
                <div className="button" onClick={() => buttonClicked('8')}>8</div>
                <div className="button" onClick={() => buttonClicked('9')}>9</div>
                <div className="button operator2" onClick={() => buttonClicked('*')}>*</div>
                <div className="button" onClick={() => buttonClicked('4')}>4</div>
                <div className="button" onClick={() => buttonClicked('5')}>5</div>
                <div className="button" onClick={() => buttonClicked('6')}>6</div>
                <div className="button operator2" onClick={() => buttonClicked('-')}>-</div>
                <div className="button" onClick={() => buttonClicked('1')}>1</div>
                <div className="button" onClick={() => buttonClicked('2')}>2</div>
                <div className="button" onClick={() => buttonClicked('3')}>3</div>
                <div className="button operator2" onClick={() => buttonClicked('+')}>+</div>
                <div className="button" onClick={() => buttonClicked('0')}>0</div>
                <div className="button" onClick={() => buttonClicked('00')}>00</div>
                <div className="button" onClick={() => buttonClicked('.')}>.</div>
                <div className="button operator1" onClick={() => buttonClicked('=')}>=</div>
            </div>
        </div>
    )
}


export default Calculator
