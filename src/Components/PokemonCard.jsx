import React from 'react';

const PokemonCard = ({ pokemondata }) => {

  const {name, height, weight} = pokemondata;
  const {front_default} = pokemondata.sprites;
  const {base_stat} = pokemondata.stats[1];

  return (
    <div className="pokemon-card">
      <img className="pokemon-image" src={front_default} alt={name} />
      <h3 className="pokemon-name">{name}</h3>
      <div className="grid-three-cols">
        <p className="pokemon-info">Height: {height}</p>
        <p className="pokemon-info">Weight: {weight}</p>
        <p className="pokemon-info">Speed: {base_stat}</p>
        </div>
      
    </div>
  );
};

export default PokemonCard;