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

export const useSuperHeroesData = () => {
  return useQuery(
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
};
