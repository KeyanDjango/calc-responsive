import React, { useState, useEffect } from 'react';
import Style from './Navigation.module.css'
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navigation = () => {

    const [isCheck, setCheck] = useState(false);

    useEffect(() => {
        if (isCheck) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
    }, [isCheck]);



    const HandleHideBar = () => {
        setCheck(!isCheck);
    }

    return (
        <>
            <div className={Style.container_parent}>
                <span style={{ position: 'relative', right: 20, fontSize: '1.2rem' }}>LOGO</span>
                <div className={Style.container_txt}>

                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="about">ABOUT</NavLink>
                    <NavLink to="dashboard">DASHBOARD</NavLink>

                    <FaBars style={{ outline: 'solid', padding: 3 }} className={Style.humbargericon} onClick={HandleHideBar} />
                </div>
            </div>
            {isCheck &&
                <SideNavBar />
            }

        </>
    )
}


export default Navigation;


function SideNavBar() {
    return (
        <div className={Style.side_nav_parent}>
            <div className={Style.side_nav_content}>

                <NavLink to="/" style={({ isActive }) => ({
                    textAlign: 'center',
                    backgroundColor: isActive ? 'lightgrey' : '',
                    border: '1px solid black',
                    marginTop: 3,
                    color: 'black',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    display: 'block', // To ensure it behaves like a block element
                    padding: '10px' // Add some padding for better appearance
                })}>
                    HOME <IoMdHome size={18} style={{ position: 'relative', top: 2 }} />
                </NavLink>

                <NavLink to="/about" style={({ isActive }) => ({
                    textAlign: 'center',
                    backgroundColor: isActive ? 'lightgrey' : '',
                    border: '1px solid black',
                    marginTop: 3,
                    color: 'black',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    display: 'block', // To ensure it behaves like a block element
                    padding: '10px' // Add some padding for better appearance
                })}>
                    ABOUT <CgProfile size={18} style={{ position: 'relative', top: 2 }} />
                </NavLink>

                <NavLink to="/dashboard" style={({ isActive }) => ({
                    textAlign: 'center',
                    backgroundColor: isActive ? 'lightgrey' : '',
                    border: '1px solid black',
                    marginTop: 3,
                    color: 'black',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    display: 'block', // To ensure it behaves like a block element
                    padding: '10px' // Add some padding for better appearance
                })}>
                    DASHBOARD <CgProfile size={18} style={{ position: 'relative', top: 2 }} />
                </NavLink>

            </div>
        </div>
    )
}