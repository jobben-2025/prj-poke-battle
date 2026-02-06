"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface pokemonData {
  id: number;
}

/* interface PokemonDetailsProp {
  
} */
export default function Pokemon({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const [pokemonDetails, setPokemonDetails] = useState<pokemonData | null>(
    null,
  );
  useEffect(() => {
    const fetchPokemonData = async () => {
      const { name } = await params;

      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`,
        );
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.log("Error fetching Pokemon data");
      }
    };

    fetchPokemonData();
  }, []);

  if (!pokemonDetails) {
    return <p>Loading ....</p>;
  }

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.id}.png`;
  return (
    <div>
      <h1 className="ml-10">Piki ID {pokemonDetails.name} </h1>
      <img src={imageUrl} alt="" />
      <Link href="/pokemons">Go Home</Link>
    </div>
  );
}
