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
    route: '/superheroes-react-query',
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
