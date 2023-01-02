import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

import axios from 'axios';
import classes from './Pokemons.module.css'

//change so that it fetches only name and image, not all the data
const Pokemons = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151&offest=0')
            .then(res => {
                const fetches = res.data.results.map((p) => {
                    return axios.get(p.url)
                        .then((res) => res.data);
                });

                Promise.all(fetches)
                    .then((res) => {
                        setData(res);
                        setIsLoading(false);
                    })
            })
    }, [])

    return (
        <div className={classes.cards}>
            {data.map((card) => (
                <Card key={card.name} name={card.name}
                    image={card.sprites.other['official-artwork'].front_default} />))}
        </div>
    );


};

export default Pokemons;