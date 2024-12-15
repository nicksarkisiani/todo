import {createSlice} from "@reduxjs/toolkit";


interface State {
    tasks: Task[]
}

const initialState = {
    tasks: []
}

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                task: action.payload,
                status: "active"
            })
        },

    }
})

export default taskSlice.reducer;