import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Card.module.css';

const Card = ({ image, name }) => {
    return (

        <div className={classes.card}>
            <img src={image} alt={name}></img>
            <h3>{name}</h3>
            <Link to={`${name}`}>See more</Link> {/* template strings are used here to ensure the data passed is a string */}
        </div>


    );
};

export default Card;