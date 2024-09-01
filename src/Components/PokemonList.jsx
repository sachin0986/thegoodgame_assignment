import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import Shimmer from './Shimmer';
import { FETCH_URL } from '../Utils/Constants';

const PokemonList = () => {
const [pokeData, setpokiData] = useState([]);
const [search, setsearch] = useState("");
    useEffect(() => {
    fetchData();
    }, [])


    const fetchData = async () => {
      try {

        const data = await fetch(FETCH_URL);
      const json = await data.json();

        const PokemonData = json.results.map(async (currPokemon) => {
          const data = await fetch(currPokemon.url);
          const json = await data.json();
          return json;
        });

        const FinalFetch = await Promise.all(PokemonData);
        console.log(FinalFetch);
          setpokiData(FinalFetch);

      } catch (error) {
          console.log(error);
      }
      
    };
    if(pokeData === null)
    {
      return <Shimmer />
    }

    return (
     <div>
        <div className='pokemon-search'>
            <input type="text" onChange={(e) => setsearch(e.target.value)} placeholder="Search for Pokemons"/>
        </div>
        <div className="cards">
            {pokeData.filter((pokemon) => {
              return search.toLowerCase() === "" ? pokemon : pokemon.name.toLowerCase().includes(search.toLowerCase());
            }).map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemondata={pokemon}/>
            ))
            }
        </div>
     </div>
    );
  };


export default PokemonList;