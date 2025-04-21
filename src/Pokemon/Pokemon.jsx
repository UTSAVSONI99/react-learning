import React from "react";
import "./Pokemon.css";
import { useState, useEffect } from "react";
export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  // const fetchPokemon = async () => {
  //   fetch(API)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setPokemonData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setError(error);
  //       setLoading(false);
  //     });
  // };

  const fetchPokemon = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }

  }


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

  if (error) {
    return (
      <div>
        <h1> Error: {error.message}</h1>
      </div>
    );
  }

  return (
    <section className="container">
      <header>
        <h1>Lets Catch pokemon</h1>
      </header>
      <ul className="card-demo">
        <li className="pokemon-card">
          <figure>
            <img
              src={pokemonData.sprites.other.dream_world.front_default}
              alt={pokemonData.name}
              className="pokemon-image"
            />
          </figure>
          <h1>{pokemonData.name}</h1>
          <div className="grid-three-cols">
            <p className="pokemon-info">
              <span> Height:{pokemonData.height}</span>
            </p>
            <p className="pokemon-info">
              <span>Weight:{pokemonData.weight}</span>
            </p>
            <p className="pokemon-info">
              <span> speed:{pokemonData.stats[5].base_stat}</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
