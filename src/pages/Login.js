import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const { login } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Call the login function from the user context with the entered username and password
        login(username, password, () => {
            navigate('/dashboard');
        })
       
      };

  return (
    <div className='flex items-center justify-center bg-black h-screen'>
        <div className='flex flex-col items-center border-4 border-white p-10 rounded bg-yellow-300'>
            <div className='font-semibold text-2xl underline pb-5'>Login Page</div>

            <form className='flex flex-col' onSubmit={handleLogin}>

                <label className='pb-1 font-medium'>UserName</label>
                <input className='focus:outline-none border border-gray-500 rounded w-60 px-1 py-1.5 mb-4'
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />

                <label className='pb-1 font-medium'>Password</label>
                <input className='focus:outline-none border border-gray-500 rounded w-60 px-1 py-1.5 mb-8'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className='border-2 border-white w-fit px-5 py-1 rounded bg-black text-yellow-300 font-medium cursor-pointer'>Login</button>

            </form>

        </div>
    </div>
  )
}

export default Login