import React,{useEffect, useState} from 'react';
import TaskCard from './TodoCard';
import TodoForm from './CreateTodo';

//═════════════════Extern════════════════════
import axios from 'axios';

const RequestMethod = () => {
    const[todos, setTodos]=useState([])
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
  },[])

  const view = todos.map((value) => {
    return(
      <TaskCard
        key={value._id}
        taskName={value.task} 
        studentName={value.student} 
        idTask={value._id} 
        deleteId={setId} 
        status={value.isCompleted}
        //Var's to update function
        statusMessenger={setTaskState}
        updateId={setIdToUpdate}
      />
    )
  })

  /*═══════════════════════════════════════════════════════
                        Method POST 
    ═══════════════════════════════════════════════════════*/
   const[requestTask, setRequestTask]=useState(null)
    useEffect(() =>{
      if(requestTask){
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
      if(id){
        axios.delete(`https://todos-academlo.herokuapp.com/api/todo/${id}`)//id из TaskCard
        .then(response =>{
          console.log(response)
        })
        .catch(err =>{
          console.log(err)
        })
      }
    },[id])
   /*═══════════════════════════════════════════════════════
                          Method PUT 
    ═══════════════════════════════════════════════════════**/
    useEffect(() =>{
      if(idToUpdate){
        axios.put(`https://todos-academlo.herokuapp.com/api/todo/${idToUpdate}`,taskState)
          .then(response =>{
            console.log(response)
          })
          .catch(err =>{
          console.log(err)
        })
      }
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
