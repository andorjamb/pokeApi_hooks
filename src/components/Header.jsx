import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import Nav from './Nav';


const Header = () => {
    return (
        <header className={classes.header}>

            <Link to='/'><div className={classes.title}><h1 className={classes.h1}>Pokedex<span className={classes.subtitle}> With Hooks</span></h1></div>
            </Link >
            <Nav />
        </header>
    );
};

export default Header;