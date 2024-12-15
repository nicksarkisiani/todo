import {taskSlice} from "../store/task/taskSlice.ts";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";


const rootActions = {
    ...taskSlice.actions
}

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
}