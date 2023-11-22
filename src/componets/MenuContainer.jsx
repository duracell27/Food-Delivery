import React from 'react'

const MenuContainer = ({link, icon, active}) => {
  return (
    <li className={active?'active': ''}>
        <a href={link}>
            <span className='icon'>{icon}</span>
        </a>
    </li>
  )
}

export default MenuContainer