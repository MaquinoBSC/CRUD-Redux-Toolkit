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
    }, []);

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
        <form onSubmit={ (e)=> handleSubmit(e) }>
            <input name='title' type="text" placeholder='Title' value={task.title} onChange={ (e) => handleChange(e) } />
            <textarea name='description' placeholder='Description' value={task.description} onChange={ (e) => handleChange(e) }></textarea>
            <button type='submit'>Save</button>
        </form>
    )
}