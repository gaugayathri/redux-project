import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { updateTaskInReducer } from '../Slices/taskSlice';
import { useDispatch,useSelector } from 'react-redux';
function MyVerticallyCenteredModal(props) {

    let [title,setTitle]=useState('')
    let [description,setDescription]=useState('')
    let [id,setId]=useState(0)
    let dispatch=useDispatch()
    let {selectTask}=useSelector((state)=>state.tasks)


let updateTask=()=>{
  props.onHide()
  dispatch(updateTaskInReducer({id,title,description}))
}

useEffect(()=>{
  if(Object.keys(selectTask).length !==0){
    setTitle(selectTask.title)
    setDescription(selectTask.description)
    setId(selectTask.id)
  }
},[selectTask])

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Task 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Task Title</Form.Label>
      <Form.Control type="text" placeholder="Enter task title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Task Description</Form.Label>
      <Form.Control type="text" placeholder="Enter task description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
    </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>updateTask()}>Update</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

export default MyVerticallyCenteredModal;