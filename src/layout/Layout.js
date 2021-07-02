import React from 'react';

import { Avatar } from '../components/Avatar/Avatar';
import { Link } from '../components/Links/Link';

import { User } from '../utils/user'
import { Links } from '../utils/links'
import './Layout.css'

export const Layout = () => {

  return (
    <div className='container'>
      <div className='main'>
        <div className='user_avatar'>
          <Avatar
            user_avatar={User.avatar.default}
            fullname={User.name}
            username={User.username}
            description={User.description}
          />
        </div>
        {Links.map((item) => {
          return (
            <Link
              key={item.id}
              icon_name={item.icon.default}
              name={item.name}
              link={item.link}
              alt=""
            ></Link>
          );
        })}
      </div>
    </div>
  )
}