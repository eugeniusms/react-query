import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = async () => {
  const { data } = await axios.get('http://localhost:8000/superheroes');
  return data;
};

export const SuperHeroesReactQuery = () => {
  const { isLoading, data } = useQuery('superheroes', fetchSuperHeroes);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h2>Super Heroes React Query Page</h2>
      {data?.map((hero: any) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
};
