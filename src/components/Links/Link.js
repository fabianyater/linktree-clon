import React from 'react';
import './Link.css'

export const Link = (props) => {

  const { icon_name, name, link, alt } = props

  return (
    <a href={link} target='_blank' rel='noopener' className='link_container'>
      <img src={icon_name} className='logo' alt={alt} />
      <h1 className='link_name'>{name}</h1>
    </a>
  )
}