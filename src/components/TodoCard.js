import React,{useState, useEffect} from 'react';
import './TodoCard-style.css'


const TaskCard = ({taskName,studentName, idTask, deleteId, status, statusMessenger,updateId}) => {
    const[idSelected, setIdSelected] =useState(idTask)
    const [checked, setIsChecked] = useState()

   useEffect(() =>{
        if(status === true) {
        setIsChecked(false)
        } else {
        setIsChecked(true)
        }
   },[status])
   
    const handleDelete = () => {
        setIdSelected(idTask)
        console.log("Этот id будеть удален:",idSelected);
        deleteId(idSelected);
    }

    const handleUpdate = () => {
        console.log("Id and status:",idSelected, checked)
        statusMessenger(checked)
        updateId(idSelected)
    }

    return(
        <div>
            <div>
                <div className="card-tasks">
                    <h3>{taskName}</h3>
                    <p>{studentName}</p>
                    <button onClick={handleDelete}>DELETE</button>
                    <input type="checkbox" onClick={handleUpdate}/>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;
