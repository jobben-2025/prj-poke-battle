const url = "https://pokeapi.co/api/v2/pokemon";

type Pokemon = {
  name: string;
  url: string;
};

export default async function PokemonsPage() {
  const response = await fetch(url);
  const data: Pokemon[] = await response.json();

  console.log(data);

  return (
    <div>
      <h1>Pokemon</h1>
    </div>
  );
}
