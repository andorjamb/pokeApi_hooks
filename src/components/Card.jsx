import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Card.module.css';

const Card = ({ image, name }) => {
    return (

        <div className={classes.card}>
            <img src={image} alt={name}></img>
            <h3 data-testid="heading3">{name}</h3>
            {/*    <Link className={classes.seeMore} to={`${name}`}>See more</Link> */}
        </div>


    );
};

export default Card;