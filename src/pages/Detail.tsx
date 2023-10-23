import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();

  // default

  const { data: pokemonName = [] } = usePokemonName(Number(id));
  const { data: pokemonEvolutionData } = usePokemonEvolution(Number(id));

  console.log(pokemonEvolutionData); // Review: To remove crap code

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error.message}</>;

  return (
    <>
      {pokemonDetailData ? (
        <PokemonDetail
          propsDetailData={pokemonDetailData}
          koreanName={pokemonName}
          evolutionData={pokemonEvolutionData}
        />
      ) : (
        <>Null</>
      )}
    </>
  );
};

export default Detail;
