import axios from 'axios';
import { useQuery } from 'react-query';

interface QueryKeyProps {
  queryKey: string[];
}

const fetchSuperHero = async ({ queryKey }: QueryKeyProps) => {
  const heroId = queryKey[1];
  const { data } = await axios.get(
    `http://localhost:8000/superheroes/${heroId}`
  );
  console.log(data);
  return data;
};

export const useSuperHeroData = (heroId: any) => {
  return useQuery(
    /* 
      data yang difetch akan disimpan ke dalam cache 
      dengan key 'superheroes' 
    */
    ['superheroes', heroId],
    fetchSuperHero
  );
};
