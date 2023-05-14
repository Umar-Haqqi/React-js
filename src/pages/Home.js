import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

// this hook will be use to make request to get data from api
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export default function Home() {
  const { username } = useContext(AppContext)

  const { data: catData, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error!!!</p>
  }
  return (
    <>
      <div style={{ backgroundColor: 'lightBlue' }}>
        <h2>HOME page</h2>
        <h3>The user is: {username}</h3>
        {/* <h2>The user is: {props.username}</h2>  no need of props after using useContext */}
      </div>
      <p>Cat fact: {catData?.fact}</p>
      <button onClick={refetch}>Update data</button>
    </>
  )
}
