import React,{useState} from 'react';

//═════════════════Extern════════════════════
import {useForm} from 'react-hook-form';

const TodoForm = ({messenger}) =>{
    const[newTask, setNewTask] = useState([])
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        console.log(data);
        setNewTask({
            student:data.student,
            task:data.task
        })
        messenger(newTask);
    }
    return(
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Student name" name="student" ref={register({required:true})}/>
                    {errors.student &&  <p>This is required</p>}
                    <input placeholder="Task name" name="task" ref={register({required:true})}/>
                    {errors.task &&  <p>This is required</p>}
                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
}

export default TodoForm;