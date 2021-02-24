import React,{useEffect, useState} from 'react';
import TaskCard from './TodoCard';
import TodoForm from './CreateTodo';

//═════════════════Extern════════════════════
import axios from 'axios';

const RequestMethod = () => {
    const[todos, setTodos]=useState([])
    const[todo, setTodo]=useState([])
    const[id, setId]=useState("")
    const[taskState, setTaskState]=useState()
    const[idToUpdate, setIdToUpdate]=useState()
  /*═══════════════════════════════════════════════════════
                           Method GET 
    ═══════════════════════════════════════════════════════*/  
  useEffect(() =>{
    axios.get(`https://todos-academlo.herokuapp.com/api/todos`)
      .then(response =>{
        setTodos(response.data.todos);
      })
      .catch(err =>{
        console.log(err)
      })
      let taskList = todos.map(element =>{
        return {name:element.student, task:element.task, id:element._id, status:element.isComplete}; 
      })
      setTodo(taskList)
  },[])

  const view = todo.map((value) => {
    return(
      <TaskCard 
        taskName={value.task} 
        studentName={value.name} 
        idTask={value.id} 
        deleteId={setId} 
        status={value.status}
        statusMessenger={setTaskState}
        updateId={setIdToUpdate}
      />
    )
  })

  /*═══════════════════════════════════════════════════════
                        Method POST 
    ═══════════════════════════════════════════════════════*/
   const[requestTask, setRequestTask]=useState([])
   //console.log("Message:",requestTask)
    useEffect(() =>{
      if(requestTask.length !== 0){
        console.log("Sended:",requestTask)
        axios.post(`https://todos-academlo.herokuapp.com/api/todo`,requestTask)
           .then(response =>{
              console.log(response)
            })
           .catch(err =>{
              console.log(err)
            })
      }
    },[requestTask])
  /*═══════════════════════════════════════════════════════
                           Method DELETE 
    ═══════════════════════════════════════════════════════*/
    useEffect(() =>{
      if(id!==undefined){
        axios.delete(`http://todos-academlo.herokuapp.com/api/todo/${id}`)//id из TaskCard
        .then(response =>{
          console.log(response)
        })
        .catch(err =>{
          console.log(err)
        })
      }
    },[id])
   /*═══════════════════════════════════════════════════════
                          Обновить
    ═══════════════════════════════════════════════════════**/
   
    useEffect(() =>{
      axios.put(`http://todos-academlo.herokuapp.com/api/todo/${idToUpdate}`,taskState)
      .then(response =>{
        console.log("Обноблено!")
        console.log(response)
      })
      .catch(err =>{
        console.log(err)
      })
    },[idToUpdate, taskState])

   return(
      <>
        <h1>TO-DO list</h1>
        <div>
          <TodoForm messenger={setRequestTask} />
        </div>
        <div>{view}</div>
      </>
  )
}

export default RequestMethod;
