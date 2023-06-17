export const SuperHeroById = ({ data }: any) => {
  return (
    <>
      <h2>Super Hero React Query By Id Page</h2>
      <div>
        {data.name} - {data.alter_ego}
      </div>
    </>
  );
};
