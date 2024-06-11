import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const {taskList} =useSelector((state)=>state.tasks)
  return (
    <>
       <h1 className='text-center text-primary'>Project Management</h1>
       <p className='text-center lead'>{`currently ${taskList.length} task(s) pending`} </p>
    </>
  )
}

export default Navbar