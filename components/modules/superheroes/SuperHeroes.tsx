import axios from 'axios';
import { useEffect, useState } from 'react';

export const SuperHeroes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/superheroes').then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map((hero: any) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
};
