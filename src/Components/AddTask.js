import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TableTask from './Table';
import { useDispatch } from 'react-redux';
import { addTaskToReducer } from '../Slices/taskSlice';


const AddTask = () => {

  let dispatch=useDispatch()
  
    let [title,setTitle]=useState('')
    let [description,setDescription]=useState('')

    const taskSubmit=(e)=>{
      e.preventDefault()
      console.log({title,description})
      dispatch(addTaskToReducer({title,description}))

    }
    
  return (
    <>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Task Title</Form.Label>
      <Form.Control type="text" placeholder="Enter task title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Task Description</Form.Label>
      <Form.Control type="text" placeholder="Enter task description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit" onClick={(e)=>taskSubmit(e)}>
      Submit
    </Button>
  </Form>
   
  <TableTask/>
  </>
  )
}

export default AddTask