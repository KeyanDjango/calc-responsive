import React from 'react';
import Style from './Dashboard.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();
    return (
        <>
            <h1 className={Style.txt}>HI DASHBOARD</h1>
            <div className={Style.parent_card}>
                <div className={Style.Dashboard_parent_card} style={{backgroundColor:'lightblue',fontWeight:'bold'}} onClick={() => navigate('/calculator')}>
                     CALCULATOR
                </div>

                <div className={Style.Dashboard_parent_card}>

                </div>

                <div className={Style.Dashboard_parent_card}>

                </div>

            </div>

        </>
    )
}