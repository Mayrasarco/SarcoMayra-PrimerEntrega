
import React, {useContext} from "react";
import CardWidget from '../CardWidget';
import { Theme } from '../../contexts/Theme';
import './styles.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    

    const {themeColor, setThemeColor} = useContext(Theme);

    const handleChange = (event)=> {
        setThemeColor(event.target.value)
    }
    return (
        <ul 
        className={themeColor === "light" ? "ul-container" : "ul-container-dark"}>
            <li ><Link to="/">Home</Link></li>
            <li ><Link to="/category/title">Electronics</Link></li>
            <li ><Link to="/category/category">Women's clothes</Link></li>

            <select value= {themeColor} onChange= {handleChange} className = {themeColor === "dark" ? "theme-select-dark" : "theme-select"} >
            <option value= {'light'}>light</option>
            <option value={'dark'}>dark</option>
            </select>
            
            <CardWidget/>

        </ul>
    );
};

export default NavBar;