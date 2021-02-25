import React,{useState, useEffect} from 'react';
import './TodoCard-style.css'


const TaskCard = ({taskName,studentName, idTask, deleteId, status, statusMessenger,updateId}) => {

    const [checked, setIsChecked] = useState(status)

    const handleDelete = () => {
        deleteId(idTask);
    }

    const handleUpdate = () => {
        setIsChecked((prevState) => {
            const actualState = !prevState;
            statusMessenger({
                _id: idTask,
                task:taskName,
                student:studentName,
                isCompleted:actualState})//This object we are sending
            updateId(idTask);
            return actualState;
        });
    }

    useEffect(() =>{
        setIsChecked(status)
   },[status])
   
    return(
        <div>
            <div>
                <div className="card-tasks">
                    <h3>{taskName}</h3>
                    <p>{studentName}</p>
                    <button onClick={handleDelete}>DELETE</button>
                    <input checked={checked} type="checkbox" onChange={handleUpdate}/>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;
