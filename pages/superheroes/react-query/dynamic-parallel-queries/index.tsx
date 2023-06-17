import { DynamicParallelQueries } from '@components/modules/superheroes/react-query/dynamic-parallel-queries/DynamicParallelQueries';
import type { NextPage } from 'next';

const DynamicParallelQueriesPage: NextPage = () => {
  return <DynamicParallelQueries heroIds={[1, 3]} />; // contoh dibuat hardcode dulu
};

export default DynamicParallelQueriesPage;
