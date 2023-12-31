import Link from 'next/link';

const FEATURES = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'Super Heroes',
    route: '/superheroes',
  },
  {
    name: 'Super Heroes React Query',
    route: '/superheroes/react-query/basic',
  },
  {
    name: 'Super Heroes React Query On Click',
    route: '/superheroes/react-query/on-click',
  },
  {
    name: 'Super Heroes React Query Callback',
    route: '/superheroes/react-query/callback',
  },
  {
    name: 'Super Heroes React Query Data Transformation',
    route: '/superheroes/react-query/data-transformation',
  },
  {
    name: 'Super Heroes React Query Custom Query Hook',
    route: '/superheroes/react-query/custom-query-hook',
  },
  {
    name: 'Super Heroes React Query Parallel Queries',
    route: '/superheroes/react-query/parallel-queries',
  },
  {
    name: 'Super Heroes React Query Dynamic Parallel Queries',
    route: '/superheroes/react-query/dynamic-parallel-queries',
  },
];

export const Navbar = () => {
  return (
    <div>
      {FEATURES.map((feature: any, id_feature: number) => (
        <Link href={feature.route} key={id_feature}>
          <div className="flex items-center gap-3 text-lg py-2 px-6">
            <div>{feature.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};
