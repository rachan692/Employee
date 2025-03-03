import React, { useState } from 'react'
import { setLocalStorage } from '../Utils/LocalStorage'

const Header = () => {
  // const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }
  const logOutUser = ()=>{
localStorage.setItem('loggeddInUser','')
window.location.reload()
}
localStorage.clear()
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium text-white'>Hello <br/><span className='text-3xl font-semibold' >username 👋</span></h1>
    <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm '>Log Out</button>
    </div>
  )
}

export default Header
