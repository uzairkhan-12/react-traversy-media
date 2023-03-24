import React from 'react'
import Button from './Button'

const Header = ({title,onAddClick,showAddTasks}) => {
  const onClick = () => {
    console.log('click')
  }
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button bgColor={!showAddTasks ? `green`: `red`} text={!showAddTasks ? `Add`: `close`} onClick={onAddClick}/>
    </header>
  )
}

export default Header