import axios from 'axios';
import { useQueries } from 'react-query';

const fetchSuperHero = async (heroId: string) => {
  const { data } = await axios.get(
    `http://localhost:8000/superheroes/${heroId}`
  );
  return data;
};

export const DynamicParallelQueries = ({ heroIds }: any) => {
  const queryResults = useQueries(
    heroIds.map((id: any) => {
      return {
        queryKey: ['superheroes', id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );

  console.log(queryResults);

  if (queryResults.some((result: any) => result.isLoading)) {
    return <div>Loading...</div>;
  }

  if (queryResults.some((result: any) => result.isError)) {
    return <div>Something went wrong...</div>;
  }

  return (
    <>
      <h2>Dynamic Parallel Queries</h2>
      <div>
        {queryResults.map((result: any) => (
          <div key={result.data.id}>
            <p>{result.data.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
