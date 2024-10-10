import React, { useRef, useState } from 'react';
import Styles from './AgeCalc.module.css';

export default function AgeCalc() {
    const [datecalc, setDateCalc] = useState('');
    const [result_age, setResultAge] = useState(0);
    const [message, setMessage] = useState('');
    const[isagemodal,setAgemodal] = useState(false);

    const current_date = new Date();
    const dob_date = new Date(datecalc);
    let result = current_date.getFullYear() - dob_date.getFullYear();

    function handleClick() {

        if (!datecalc) {
            setMessage('DOB field should not be empty!');
            setAgemodal(true);
        }
        else if (current_date.getFullYear() === dob_date.getFullYear()) {
            setMessage('DOB year and current year should not be same!');
            setAgemodal(true);
        }
        else if (dob_date.getFullYear() > current_date.getFullYear()) {
            setMessage('DOB year should not be greater than current year!');
            setAgemodal(true);
        }
        else {
            setResultAge(result);
        }
    }


    function handleClear() {
        setDateCalc('');
        setResultAge(0)
    }

    function CloseModal(){
        setAgemodal(false);
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>AGE CALCULATOR</h1>

            <div className={Styles.agecalc_parent_con}>
                <div className={Styles.agecalc_child_con}>
                    <h3>Enter Your DOB</h3>
                    <input value={datecalc} type='date' onChange={(e) => setDateCalc(e.target.value)} />

                    <div style={{ display: 'flex' }}>
                        <button className={Styles.agebtn} onClick={handleClick}>CALCULATE</button>
                        <button className={Styles.agebtn} onClick={handleClear}>CLEAR</button>
                    </div>

                    <h4 style={{ marginTop: 20 }}>{result_age} <span style={{ color: 'blue', fontWeight: 'bold' }}> YEARS OLD </span></h4>
                </div>
            </div>
            {isagemodal &&
            <ModalAgeCalc messagemodal={message} onClose={CloseModal}/>
            }
        
        </div>
    )
}


function ModalAgeCalc(props) {
    return (
        <div className={Styles.agecalc_parent}>
            <div className={Styles.agecalc_content}>
                <h2 style={{textAlign:'center',color:'red',fontFamily:'arial'}}>WARNING</h2>
                <hr/>
                <h4 style={{textAlign:'center',marginTop:30}}>{props.messagemodal}</h4>
                <button className={Styles.btnagecalc} onClick={props.onClose}>OKAY</button>
            </div>
        </div>
    )
}