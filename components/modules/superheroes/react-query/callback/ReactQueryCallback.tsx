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

export const ReactQueryCallback = () => {
  const onSuccess = (data: any) => {
    console.log('Perform side effect after data fetching', data);
  };

  const onError = (error: any) => {
    console.log('Perform side effect after encountering error', error);
  };

  const { isLoading, data, isError, error, isFetching } = useQuery(
    /* 
      data yang difetch akan disimpan ke dalam cache 
      dengan key 'superheroes' 
    */
    'superheroes',
    fetchSuperHeroes,
    {
      onSuccess,
      onError,
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
      {data?.map((hero: Superhero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
};
