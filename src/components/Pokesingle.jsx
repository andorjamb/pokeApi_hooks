import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Pokesingle.module.css'

import axios from 'axios';

const Pokesingle = () => {
    const params = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function nextPokemon() {
        console.log('clicked');
    }

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`)
            .then((res) => {
                setData(res.data);
                setIsLoading(true)
            });
    }, []);

    return (
        isLoading ?
            <p className={classes.loading}>Loading...</p>

            :

            <div className={classes.pokesingle}>
                <div className={classes.container}>
                    <div className={classes.pokesingleImg}> <img src={data.sprites?.other['official-artwork'].front_default} alt={data.name}></img>  </div>

                    <div className={classes.info}>
                        <table>
                            <tr>
                                <th>Name:</th><td>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</td>
                            </tr>
                            <tr><th>Id:</th><td>{data.id}</td></tr>
                            <tr><th>Types:</th><td><ul>{data.types.map((type) => <li>{type.type.name}</li>)}</ul></td></tr>
                            <tr><th>Weight:</th><td>{data.weight}</td></tr>
                            <tr><th>Order:</th><td>{data.order}</td></tr>
                        </table></div>


                </div>

                <button onClick={nextPokemon}><span className="material-icons">double_arrow</span></button>
            </div>
    );
};


export default Pokesingle;

