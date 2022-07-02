import React, { useState } from 'react';

export default function TasksForm(){
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
    }

    return (
        <form onSubmit={ (e)=> handleSubmit(e) }>
            <input name='title' type="text" placeholder='Title' onChange={ (e) => handleChange(e) } />
            <textarea name='description' placeholder='Description' onChange={ (e) => handleChange(e) }></textarea>
            <button type='submit'>Save</button>
        </form>
    )
}