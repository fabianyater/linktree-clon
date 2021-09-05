import React from 'react';

import { Avatar } from '../components/Avatar/Avatar';
import { Link } from '../components/Links/Link';

import { User } from '../utils/user'
import { Links } from '../utils/links'
import './Layout.css'

export const Layout = () => {

  return (
    <div className='container'>
      <header>
        <Avatar
          user_avatar={User.avatar.default}
          fullname={User.name}
          username={User.username}
          description={User.description}
        />
      </header>
      <main>
        <ul>
          {Links.map((item) => {
            return (
              <li>
                <Link
                  key={item.id}
                  icon_name={item.icon.default}
                  name={item.name}
                  link={item.link}
                  alt=""
                ></Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  )
}