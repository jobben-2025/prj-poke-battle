import Link from "next/link";
import { Pokemon } from "@/types";
import PokemonList from "./components/PokemonList";

interface PokemonProps {
  pokemons: Pokemon[];
}

export default function Home() {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <Link href="/">Home</Link>
      {/*   <PokemonList pokemons={pokemons:Pokemon} /> */}
    </div>
  );
}
