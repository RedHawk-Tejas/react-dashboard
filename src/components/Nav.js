import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate('/')
  }
  return (
    <div className='bg-black text-white flex items-center justify-between px-2 md:px-10 py-4 md:py-5'>
        <div className='text-base md:text-2xl font-medium'>Company Logo</div>
        <div className='flex items-center justify-between w-40 md:w-50'>
            <div className='md:font-medium'>{user && user.username}</div>
            <button onClick={handleLogout}
              className='px-2 md:px-6 py-1 rounded bg-yellow-400 text-black font-medium'>Logout</button>
        </div>
    </div>
  )
}

export default Nav;