import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addTask, updateTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';

export default function TasksForm(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [task, setTask] = useState({
        title: '',
        description: '',
    });
    const tasks = useSelector(state => state.tasks);

    useEffect(() => {
        if(params.id){ setTask(tasks.find(task => task.id === params.id)) }
    }, [params.id, tasks]);

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(params.id) {
            dispatch(updateTask(task));
        }
        else {
            dispatch(addTask({
                ...task,
                id: uuid()
            }));
        }
        navigate('/');
    }

    return (
        <form onSubmit={ (e)=> handleSubmit(e) } className='bg-zinc-800 max-w-sm p-4' >
            <label htmlFor='title' className='block text-xs font-bold mb-2'>Task: </label>
            <input name='title' type="text" placeholder='Title' className='w-full p-2 rounded-md bg-zinc-600 mb-2' value={task.title} onChange={ (e) => handleChange(e) } />
            <label htmlFor='description' className='block text-xs font-bold mb-2'>Description: </label>
            <textarea name='description' placeholder='Description' className='w-full p-2 rounded-md bg-zinc-600 mb-2' value={task.description} onChange={ (e) => handleChange(e) }></textarea>
            <button type='submit' className='bg-indigo-600 px-2 py-1 rounded-md'>Save</button>
        </form>
    )
}