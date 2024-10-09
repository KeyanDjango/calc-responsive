import React, { useEffect, useState } from 'react';
import Style from './Calculator.module.css';

export default function Calculator() {
    const [number, setNumber] = useState('');

    useEffect(() => {
         document.title="calculator";
    },[]);

    function HandleNumber(num) {
        setNumber(prev => prev + num)
    }

    {/* Handle Result */ }

    function HandleResult() {
        try {
            let result = eval(number.replace(/X/g,"*"));
            setNumber(result.toString());
        }
        catch{
            setNumber('ERROR')
        }
    }

    function handleDel(){
        setNumber(number.slice(0,-1));
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>CALCULATOR</h1>
            <div className={Style.calc_parent}>
                <div className={Style.calc_child}>
                    <input placeholder='0' disabled="on" style={{ textAlign: 'right', padding: 5,fontSize:25,borderBottom:'1px solid black' }} value={number} type="text" />

                    <button className={`${Style.condel} ${Style.con}`} onClick={handleDel}>DEL</button>
                    <button className={`${Style.ac} ${Style.con}`} onClick={() => setNumber('')}>AC</button>
                    <button className={`${Style.con1} ${Style.con}`} onClick={() => HandleNumber('7')}>7</button>
                    <button className={`${Style.con2} ${Style.con}`} onClick={() => HandleNumber('8')}>8</button>
                    <button className={`${Style.con3} ${Style.con}`} onClick={() => HandleNumber('9')}>9</button>
                    <button className={`${Style.con4} ${Style.con}`} onClick={() => HandleNumber('+')}>+</button>
                    <button className={`${Style.con5} ${Style.con}`} onClick={() => HandleNumber('4')}>4</button>
                    <button className={`${Style.con6} ${Style.con}`} onClick={() => HandleNumber('5')}>5</button>
                    <button className={`${Style.con7} ${Style.con}`} onClick={() => HandleNumber('6')}>6</button>
                    <button className={`${Style.con8} ${Style.con}`} onClick={() => HandleNumber('-')}>-</button>
                    <button className={`${Style.con9} ${Style.con}`} onClick={() => HandleNumber('1')}>1</button>
                    <button className={`${Style.con10} ${Style.con}`} onClick={() => HandleNumber('2')}>2</button>
                    <button className={`${Style.con11} ${Style.con}`} onClick={() => HandleNumber('3')}>3</button>
                    <button className={`${Style.con12} ${Style.con}`} onClick={() => HandleNumber('X')}>X</button>
                    <button className={`${Style.con13} ${Style.con}`} onClick={() => HandleNumber('.')}>.</button>
                    <button className={`${Style.con14} ${Style.con}`} onClick={() => HandleNumber('0')}>0</button>
                    <button className={`${Style.con15} ${Style.con}`} onClick={HandleResult}>=</button>
                    <button className={`${Style.con16} ${Style.con}`} onClick={() => HandleNumber('/')}>/</button>
                </div>
            </div>
        </>
    )
}