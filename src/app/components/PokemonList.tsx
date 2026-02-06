import { Pokemon } from "@/types";
import Link from "next/link";

interface PokemonProps {
  pokemons: Pokemon[];
}

const PokemonList = ({ pokemons }: PokemonProps) => {
  console.log(pokemons);

  return (
    <div className="flex grid grid-cols-4 gap-2">
      <h2>Pokimon List</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link href={`/pokemons/${pokemon.name}`}>
              <img src={pokemon.image} alt={pokemon.name} />
              <span>{pokemon.name} </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
