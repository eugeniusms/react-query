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

export const ReactQueryOnClick = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    /* 
      data yang difetch akan disimpan ke dalam cache 
      dengan key 'superheroes' 
    */
    'superheroes',
    fetchSuperHeroes,
    {
      enabled: false,
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <h2>Super Heroes React Query Page</h2>
      <button onClick={refetch}>Fetch Super Heroes</button>
      {data?.map((hero: Superhero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
};
