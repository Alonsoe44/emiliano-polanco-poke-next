import PokeCard from "../../components/pokeCard/pokeCard";
import SideBar from "../../components/sideBar/sideBar";
const pokeApi = process.env.pokeApi;
const MyPokemons = ({ pokemons: data }) => {
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

export default MyPokemons;

export const getServerSideProps = async () => {
  const pokemons = await fetch(pokeApi)
    .then((res) => res.json())
    .then((fetchData) =>
      Promise.all(fetchData.results.map((result) => fetch(result.url)))
    )
    .then((responsePokemons) =>
      Promise.all(
        responsePokemons.map((singleResponse) => singleResponse.json())
      )
    );
  return {
    props: {
      pokemons,
    },
  };
};
