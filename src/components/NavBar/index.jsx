
import React, { useContext } from "react";
import CardWidget from '../CardWidget';
import { Theme } from '../../contexts/Theme';
import './styles.css';
import { Link } from 'react-router-dom';
import { useState } from "react";

const NavBar = () => {
 const [refresh, setRefresh] = useState(false)
    

    const {themeColor, setThemeColor} = useContext(Theme);

    const handleChange = (event)=> {
        setThemeColor(event.target.value)
    }
    const handleRefresh =()=>{
        setRefresh(!refresh)
    }

    return (
        <ul 
        className={themeColor === "light" ? "ul-container" : "ul-container-dark"}>
            <li onClick={handleRefresh} ><Link to="/">Home</Link></li>
            <li onClick={handleRefresh} ><Link to="/category/electronics">electronics</Link></li>
            <li onClick={handleRefresh} ><Link to="/category/women's clothing">women's clothing</Link></li>

            <select value= {themeColor} onChange= {handleChange} className = {themeColor === "dark" ? "theme-select-dark" : "theme-select"} >
            <option value= {'light'}>light</option>
            <option value={'dark'}>dark</option>
            </select>
            
            <CardWidget />

        </ul>
    );
};

export default NavBar;