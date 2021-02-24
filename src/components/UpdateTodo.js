import React,{useState} from 'react';

import {useForm} from 'react-hook-form';

const UpdateForm = ({messengerToUpdate}) => {
    const {register, handleSubmit, errors} = useForm();
    const[updateTask, setUpdateTask] = useState([])
    const onSubmit = data => {
        console.log(data);
        setUpdateTask({
            student:data.student,
            task:data.task
        })
        messengerToUpdate(updateTask);
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Student name2" name="student" ref={register({required:true})}/>
                    {errors.student &&  <p>This is required</p>}
                <input placeholder="Task name" name="task" ref={register({required:true})}/>
                    {errors.task &&  <p>This is required</p>}
                <input type="submit"/>
            </form>
        </div>
    );
}

export default UpdateForm;