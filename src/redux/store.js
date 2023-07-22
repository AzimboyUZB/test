import { combineReducers, configureStore } from "@reduxjs/toolkit";
import QuizSlice from './slice/QuizSlice';

const reducer = combineReducers({
    quiz: QuizSlice,
})

const store = configureStore({ reducer })

export default store