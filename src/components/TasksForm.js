import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';

export default function TasksForm(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [task, setTask] = useState({
        title: '',
        description: '',
    });

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({
            ...task,
            id: uuid()
        }));
        navigate('/');
    }

    return (
        <form onSubmit={ (e)=> handleSubmit(e) }>
            <input name='title' type="text" placeholder='Title' onChange={ (e) => handleChange(e) } />
            <textarea name='description' placeholder='Description' onChange={ (e) => handleChange(e) }></textarea>
            <button type='submit'>Save</button>
        </form>
    )
}