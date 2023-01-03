import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Pokesingle.module.css'

import axios from 'axios';

const Pokesingle = () => {
    const params = useParams();
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    function nextPokemon() {
        console.log('clicked');
    }

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`)
            .then(res => {
                setData(res.data);
                setIsLoading(false);
            });


    }, []);



    if (isLoading) {
        return <p className={classes.loading}>Loading...</p>
    }
    if (data != null) {
        return (

            <div className={classes.pokesingle}>
                <div className={classes.container}>
                    <div className={classes.pokesingleImg}>
                        <img src={data.sprites.other['official-artwork'].front_default} alt={data.name} />
                    </div>

                    <div className={classes.info}>
                        <table>
                            <tbody>
                                <tr><td>Name:</td><td>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</td>
                                </tr>
                                <tr><td>Id:</td><td>{data.id}</td></tr>
                                <tr><td>Types:</td><td><ul>{data.types.map((type) => <li key={type.type.name}>{type.type.name}</li>)}</ul></td></tr>
                                <tr><td>Weight:</td><td>{data.weight}</td></tr>
                                <tr><td>Order:</td><td>{data.order}</td></tr>
                            </tbody></table></div>


                </div>

                {/*   <button onClick={nextPokemon}><span className="material-icons">double_arrow</span></button> */}
            </div>
        );
    }
};


export default Pokesingle;

