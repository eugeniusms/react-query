import axios from 'axios';
import Link from 'next/link';
import { useQuery } from 'react-query';
interface Superhero {
  id: number;
  name: string;
}

const fetchSuperHeroes = async () => {
  const { data } = await axios.get('http://localhost:8000/superheroes');
  return data;
};

export const ReactQuery = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    /* 
      data yang difetch akan disimpan ke dalam cache 
      dengan key 'superheroes' 
    */
    'superheroes',
    fetchSuperHeroes,
    {
      /*
        cacheTime: 300000
        default: 5 minutes
        seberapa lama data akan disimpan di cache sampai dihapus dari cache
      */
      cacheTime: 300000,
      /*
        staleTime: 0
        default: 0 seconds
        seberapa lama data digunakan sebelum diupdate sehingga mengurangi jumlah request ke server
      */
      staleTime: 0,
      /*
        refetchOnMount: true
        default: true -> data akan di fetch ulang ketika komponen di mount sesuai cacheTime dan staleTime
        apakah data akan di fetch ulang ketika komponen di mount
        opsi lain: false -> data tidak di fetch ulang ketika komponen di mount
        opsi lain: 'always' -> data akan di fetch ulang ketika komponen di mount apapun kondisinya
      */
      refetchOnMount: true,
      /*
        refetchOnWindowFocus: true
        default: true -> data akan di fetch ulang ketika berada dalam satu frame (tanpa refresh) sesuai cacheTime dan staleTime
        apakah data akan di fetch ulang ketika window focus
        opsi lain: false -> data tidak di fetch ulang ketika berasa dalam satu frame (tanpa refresh)
        opsi lain: 'always' -> data akan di fetch ulang ketika window focus apapun kondisinya (tanpa refresh)
      */
      refetchOnWindowFocus: true,
      /*
        refetchInterval: false
        default: false -> data tidak akan di fetch ulang secara berkala apapun kondisinya
        apakah data akan di fetch ulang secara berkala
        opsi lain: 2000 -> data akan di fetch ulang secara berkala setiap 2 detik
      */
      refetchInterval: false,
      /*
        refetchIntervalInBackground: true
        default: true -> data akan di fetch ulang secara berkala di background sesuai refetchInterval
        apakah data akan di fetch ulang secara berkala di background
        opsi lain: false -> data tidak akan di fetch ulang secara berkala di background
        # background = ketika window tidak focus (tidak berada di tab yang sedang dibuka dalam browser)
      */
      refetchIntervalInBackground: true,
    }
  );

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
      {data?.map((hero: Superhero) => (
        <div key={hero.id}>
          <Link href={`/superheroes/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
    </>
  );
};
