"use client";

import { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import { Pokemon } from "@/types";

const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100";
const url2 = "https://pokeapi.co/api/v2/pokemon/";

export default function PokemonsPage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const pokemonList = data.results.map((pokemon: Pokemon) => {
          const id = pokemon.url.split("/")[pokemon.url.split("/").length - 2];
          return {
            id: id,
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          };
        });
        setPokemons(pokemonList);
      } catch (error) {
        console.error("Error by calling data fro Pokemon");
      }
    };
    fetchPokemonData();
  }, []);

  return <div> {<PokemonList pokemons={pokemons} />} </div>;
}
