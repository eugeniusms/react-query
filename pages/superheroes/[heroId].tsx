import { useSuperHeroData } from '@components/hooks/useSuperHeroData';
import { SuperHeroById } from '@components/modules/superheroes/react-query/SuperHeroById';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const SuperHeroByIdPage: NextPage = () => {
  const router = useRouter();
  const { heroId } = router.query;
  const { isLoading, data, isError, error } = useSuperHeroData(heroId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  console.log({ data });

  return <SuperHeroById data={data} />;
};

export default SuperHeroByIdPage;
