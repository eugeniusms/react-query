import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = async () => {
  const { data } = await axios.get('http://localhost:8000/superheroes');
  return data;
};

const fetchFriends = async () => {
  const { data } = await axios.get(`http://localhost:8000/friends`);
  return data;
};

export const ParallelQueries = () => {
  const { data: superHeroes } = useQuery('superheroes', fetchSuperHeroes);
  const { data: friends } = useQuery('friends', fetchFriends);

  return (
    <>
      <h2>Parallel Queries</h2>
      <div>
        <h3>Superheroes</h3>
        {superHeroes?.map((superHero: any) => (
          <div key={superHero.id}>
            <p>{superHero.name}</p>
          </div>
        ))}
        <h3>Friends</h3>
        {friends?.map((friend: any) => (
          <div key={friend.id}>
            <p>{friend.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
