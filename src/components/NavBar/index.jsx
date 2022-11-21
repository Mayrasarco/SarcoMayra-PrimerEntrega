
import React, {useContext} from "react";
import CardWidget from '../CardWidget';
import { Theme } from '../../contexts/Theme';
import './styles.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    

    const [themeColor, setThemeColor] = useContext(Theme);

    const handleChange = (event)=>{
        setThemeColor(event.target.value)
    }
    return (
        <ul 
        className={themeColor === "light" ? "ul-container" : "ul-container-dark"}>
            <li ><Link to="/">Home</Link></li>
            <li ><Link to="/category/title">Title</Link></li>
            <li ><Link to="/category/category">Category</Link></li>

            <select value= {themeColor} onChange= {handleChange}>
            <option value= {'light'}>light</option>
            <option value={'dark'}>dark</option>
            </select>
            
            <CardWidget/>

        </ul>
    );
};

export default NavBar;