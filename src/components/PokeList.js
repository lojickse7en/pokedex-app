import styled from 'styled-components';
import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';

const PokeListStyles = styled.div`
  .app-container {
    width: 100%;
    height: 100vh;
    background: linear-gradient(115deg, #fff1ff 48%), #f3533b 48% 55%,
      #fb7248 55%;
  }

  .all-container {
    height: 86vh;
    position: absolute;
    top: 80px;
    right: 30px;
    overflow-y: scroll;
    width: 100%;
  }
`;

export default function PokeList() {
  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemons = async () => {
    const res = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=649&offset=0'
    );
    const data = await res.json();

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
    // console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <PokeListStyles>
      <div className="app-container">
        <div className="pokemon-container">
          <div className="all-container">
            {allPokemons.map((pokemonStats) => (
              <PokemonCard
                key={pokemonStats.name}
                id={pokemonStats.id.toString().padStart(3, '0')}
                image={
                  pokemonStats.sprites.other['official-artwork'].front_default
                }
                name={pokemonStats.name.replace(/^./, (str) =>
                  str.toUpperCase()
                )}
                type={pokemonStats.types[0].type.name}
                weight={pokemonStats.weight}
                height={pokemonStats.height}
                stats={pokemonStats.stats
                  .map((stat) => stat.base_stat)
                  .slice(0, 3)}
                statsName={pokemonStats.stats
                  .map((stat) => stat.stat.name)
                  .slice(0, 3)}
              />
            ))}
          </div>
        </div>
      </div>
    </PokeListStyles>
  );
}
