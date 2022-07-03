import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: "1",
        title: "Tasks 1",
        description: 'Tasks 1 Description',
        completed: false,
    },
    {
        id: "2",
        title: "Tasks 2",
        description: 'Tasks 2 Description',
        completed: false,
    },
];


export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload);
            // const taskFound = state.find(task => task.id == action.payload);
            // if(taskFound){ state.splice(state.indexOf(taskFound), 1) }
        }
    }
});

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;