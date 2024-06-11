import React,{useState} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './Modals';
import { useSelector,useDispatch } from 'react-redux'
import { deleteTaskFromReducer, selectedTask } from '../Slices/taskSlice';

const TableTask = () => {
    let [modalShow,setModalShow]=useState(false)
    const {taskList} =useSelector((state)=>state.tasks)
   let dispatch=useDispatch()


let EditTask=(item)=>{
    setModalShow(true)
    dispatch(selectedTask(item))
}
let deleteTask=(item)=>{
  dispatch(deleteTaskFromReducer(item))
}

  return (
    <>
    <Table striped bordered hover style={{marginTop:'30px'}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Task Title</th>
          <th>Task Desciption</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          {
            taskList && taskList.map((item,index)=>{
              return (
          <tr key={index}>
          <td>{index+1}</td>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>
            <Button className='mx-3' onClick={()=>EditTask(item)}>Edit</Button>
            <Button onClick={()=>deleteTask(item)}>Delete</Button>
          </td>
            </tr>
               )
            })
          }
        </tbody>
        </Table>

        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </>
  )
}

export default TableTask