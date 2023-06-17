import axios from 'axios';
import { useQuery } from 'react-query';

interface Superhero {
  id: number;
  name: string;
}

const fetchSuperHeroes = async () => {
  const { data } = await axios.get('http://localhost:8000/superheroes');
  return data;
};

export const SuperHeroesReactQuery = () => {
  const { isLoading, data, isError, error } = useQuery(
    'superheroes',
    fetchSuperHeroes
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <h2>Super Heroes React Query Page</h2>
      {data?.map((hero: Superhero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
};
