import React from 'react';
import './Avatar.css'

export const Avatar = (props) => {

  const { user_avatar, fullname, username, description } = props

  return (
    <div className='avatar_div'>
      <img src={user_avatar} className='avatar' alt='User avatar' width={96} height={96} />
      <div className='text'>
        <h1 className='text title'>{fullname}</h1>
        <h2 className='text subtitle'>{username}</h2>
        <p className='text description'>{description}</p>
      </div>
    </div>
  )
}