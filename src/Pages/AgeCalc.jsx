import React, { useRef, useState } from 'react';
import Styles from './AgeCalc.module.css';

export default function AgeCalc() {
    const [datecalc, setDateCalc] = useState('');
    const [result_age, setResultAge] = useState(0);
    const current_date = new Date();

    function handleClick() {
        if (datecalc) {
            const dob_date = new Date(datecalc);
            let result = current_date.getFullYear() - dob_date.getFullYear();
            setResultAge(result);
        }
    }

    function handleClear(){
        setDateCalc('');
        setResultAge(0)
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>AGE CALCULATOR</h1>

            <div className={Styles.agecalc_parent_con}>
                <div className={Styles.agecalc_child_con}>
                    <input value={datecalc} type='date' onChange={(e) => setDateCalc(e.target.value)} />

                    <div style={{display:'flex'}}>
                        <button className={Styles.agebtn} onClick={handleClick}>CALCULATE</button>
                        <button className={Styles.agebtn}  onClick={handleClear}>CLEAR</button>
                    </div>

                    <h4 style={{ marginTop: 20 }}>{result_age} <span style={{ color: 'blue', fontWeight: 'bold' }}> YEARS OLD </span></h4>
                </div>
            </div>
            
        </div>
    )
}


function ModalAgeCalc(){
    return(
        <>
          
        </>
    )
}