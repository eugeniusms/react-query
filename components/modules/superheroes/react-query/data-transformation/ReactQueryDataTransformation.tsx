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

export const ReactQueryDataTransformation = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    /* 
      data yang difetch akan disimpan ke dalam cache 
      dengan key 'superheroes' 
    */
    'superheroes',
    fetchSuperHeroes,
    {
      // transform data yang di-fetch
      select: (data) => data.map((hero: Superhero) => hero.name + ' is super'),
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <h2>Super Heroes React Query Page</h2>
      {data?.map((heroName: string) => (
        <div key={heroName}>{heroName}</div>
      ))}
    </>
  );
};
