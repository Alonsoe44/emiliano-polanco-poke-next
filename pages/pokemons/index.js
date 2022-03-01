import { useEffect, useState } from "react";
import PokeCard from "../../components/pokeCard/pokeCard";
import SideBar from "../../components/sideBar/sideBar";
const pokeApiUrl = process.env.NEXT_PUBLIC_POKE_URL;
// this page must be made with client side rendering
const Pokemon = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(pokeApiUrl)
      .then((res) => res.json())
      .then((fetchData) =>
        Promise.all(fetchData.results.map((result) => fetch(result.url)))
      )
      .then((responsePokemons) =>
        Promise.all(
          responsePokemons.map((singleResponse) => singleResponse.json())
        )
      )
      .then((pokemons) => {
        setData(pokemons);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="flex flex-wrap ml-20">
        {<SideBar />}
        {data.map((pokemon) => (
          <PokeCard
            key={pokemon.name}
            name={pokemon.name}
            imgUrl={pokemon.sprites.other.dream_world.front_default}
          />
        ))}
      </div>
    </>
  );
};

export default Pokemon;
