import { useSuperHeroesData } from '@components/hooks/useSuperHeroesData';

export const CustomQueryHook = () => {
  const { isLoading, data, isError, error, isFetching } = useSuperHeroesData();

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
