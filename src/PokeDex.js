import React from 'react';
import { useAxios } from './hooks';
import PokemonSelect from './PokemonSelect';
import PokemonCard from './PokemonCard';
 // assuming useAxios.js is in the same directory

function PokeDex() {
  const cardData = useAxios(`https://pokeapi.co/api/v2/pokemon`);
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={() => cardData.addCard('')} />
      </div>
      <div className="PokeDex-card-area">
        {cardData.cards.map(pokemon => (
          <PokemonCard
            key={pokemon.id}
            front={pokemon.sprites.front_default}
            back={pokemon.sprites.back_default}
            name={pokemon.name}
            stats={pokemon.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;