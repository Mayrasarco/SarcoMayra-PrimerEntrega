import React from "react";
import React from 'react';
import CardWidget from "../CardWidget";
import './styles.css';

import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <ul >
            <li ><Link to="/">Home</Link></li>
            <li ><Link to="/category/title">Title</Link></li>
            <li ><Link to="/category/category">Category</Link></li>
            
            <CardWidget/>

        </ul>
    );
};

export default NavBar;