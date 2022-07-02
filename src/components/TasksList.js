import React from 'react';
import { useSelector } from 'react-redux';

export default function TasksList(){
    const tasks = useSelector(state => state.tasks);
    console.log(tasks);

    return (
        <div>
            {
                tasks.map(task => (
                    <div key={ task.id }>
                        <h3>{ task.title }</h3>
                        <p> { task.description } </p>
                    </div>
                ))
            }
        </div>
    )
}