import React from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import Container from '../components/Container'


const Dashboard = () => {

  return (
    <>
        <Nav/>
        <div className='flex'>
            <Sidebar/>
            <Container/>
        </div>
        
    </>
  )
}

export default Dashboard