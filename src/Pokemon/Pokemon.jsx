import "./Pokemon.css";
import { useState, useEffect } from "react";
import { PokemonCard } from "./PokemonCard";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const API = "https://pokeapi.co/api/v2/pokemon?limit=24";

  const fetchPokemon = async () => {
    try {
      const response = await fetch(API);

      if (!response.ok) {
        throw new Error(error.message);
      }
      const data = await response.json();
      // console.log(data);

      const pokemonList = data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const pokemonData = await response.json();
        return pokemonData;
        // console.log(pokemonData);
      });
      const detailResponse = await Promise.all(pokemonList);
      setPokemon(detailResponse);
      // console.log(detailResponse);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const searchPokemon = pokemon.filter((poke) => {
    return poke.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) {
    return (
      <div>
        <h1> Loading...</h1>
      </div>
    );
  }
  console.log(pokemon);
  if (error) {
    return (
      <div>
        <h1> Error: {error.message}</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <header>
        <h1> Let&apos;s Catch Pokemon</h1>
      </header>
      <div className="pokemon-search">
        <input
          type="text"
          placeholder="Search Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <ul className="cards">
          {searchPokemon.map((poke) => (
            <PokemonCard key={poke.id} pokemonData={poke} />
          ))}
        </ul>
      </div>
    </div>
  );
}
