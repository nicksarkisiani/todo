import {createSlice} from "@reduxjs/toolkit";
import {Task} from "../../types";


interface State {
    tasks: Task[]
}

const initialState: State = {
    tasks: []
}

interface Action {
    payload: string
}

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: Action) => {
            state.tasks.push({
                message: action.payload,
                status: "active"
            })
        },

    }
})

export default taskSlice.reducer;