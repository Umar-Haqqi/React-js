import React from 'react'
import { useSelector } from 'react-redux';

export default function Home() {
  const username = useSelector((state) => state.user.value.username);
  return (
    <div>
      <h1>Current user: {username}</h1>
    </div>
  )
}

