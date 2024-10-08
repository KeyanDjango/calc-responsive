import react, { useState } from 'react';
import Styles from './BmiCalc.module.css'

export default function BmiCalc() {

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [message, setMessage] = useState('');
    const[isCheck,setCheck] = useState(false);
    const [result,setResult] = useState('0');
    const[status,setStatus] = useState('');

    function handleCalculate() {
        setMessage('');
        if (height.toString().trim() !== '' && height.toString() > 0) {

        }
        else {
            console.log('Height is required!. Please enter Height');
            setMessage('Height is required!. Please enter Height');
            setCheck(true);
            return
        }
        if (weight.toString().trim() !== '' && weight.toString() > 0) {

        }
        else {
            console.log('Weight is required!. Please enter Weight');
            setMessage('Weight is required!. Please enter Height');
            setCheck(true);
            return
        }

        const inch = parseInt(height) / 100;
        const squre_inch = inch * inch;
        const res = eval(weight/squre_inch);
        setResult(res.toFixed(1));

        const result_valid = parseInt(res);
        if(result_valid <= 18.4){
           setStatus('UnderWeight');
        }  
        else if(result_valid >= 18.5 && result_valid <= 24.9){
            setStatus('Normal');
        }
        else if(result_valid >= 25.0 && result_valid <= 39.9){
            setStatus('OverWeight')
        }
        else{
            setStatus('Obese')
        }
    }


    function handleClose(){
        setCheck(false)
    }

    function handleClear(){
        setWeight(0);
        setHeight(0);
        setStatus('');
        setResult('0');

    }


    return (
        <>
            <h1 style={{ textAlign: 'center' }}>BMI CALCULATOR</h1>
            <div className={Styles.bmi_parent}>
                <div className={Styles.bmi_card}>
                    <h3 style={{ textAlign: 'center', marginTop: 30 }}>Calculate your BMI</h3>

                    <label style={{ marginTop: 10 }}>HEIGHT in ( cm )</label>
                    {/* HEIGHT */}
                    <input value={height} type="number" placeholder="WEIGHT" className={Styles.weightbmi} onChange={(e) => setHeight(e.target.value)} />

                    <label style={{ marginTop: 10 }}>WEIGHT in ( kg )</label>
                    {/* WEIGHT */}
                    <input value={weight} type="number" placeholder="HEIGHT" className={Styles.weightbmi} onChange={(e) => setWeight(e.target.value)} />

                    <button className={Styles.bmibtn} onClick={() => handleCalculate()} >CALCULATE</button>

                    <button className={Styles.bmibtn1} onClick={() => handleClear()} >CLEAR</button>

                    <div className={Styles.status_card}>
                        <h5 style={{textAlign:'center',marginTop:10}}>STATUS</h5><br/>
                        <h5 style={{textAlign:'center'}}>{result}</h5>
                        <h6 style={{textAlign:'center'}}>{status}</h6>
                    </div>

                </div>  
            </div>
            
            {isCheck &&
               <AlertModal message={message} onClose={handleClose}/>
            }
            

        </>
    )
}

{/* MODAL */ }

function AlertModal(props) {
    return (
        <div className={Styles.alert_parent}>
            <div className={Styles.alert_content}>
                <h3 style={{textAlign:'center'}}>ALERT</h3>
                 

                <h4 style={{textAlign:'center'}}>{props.message}</h4>
                <button onClick={props.onClose} style={{color:'black',padding:'10px 100px 10px 100px',border:'0.2 solid black',backgroundColor:'rgb(255, 241, 160)'}}>OKAY</button>
            </div>
        </div>
    )
}