import React from 'react'
import ChangeProfile from '../components/ChangeProfile'
import { useContext } from 'react';
import { AppContext } from '../App';

export default function Profile() {
  const{username} =useContext(AppContext)
  return (
    <>
      <p>This is Profile page and user is: <b>{username}</b></p>
      <ChangeProfile />
      {/* <ChangeProfile setUsername={props.setUsername} /> */}
    </>
  )
}
