import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    quizList: [],
    answers: [],
    quizLength: 9,
}

const QuizSlice = createSlice({
    name: 'quizSlice',
    initialState,
    reducers: {
        setQuizList: (state, action) => {
            state.quizList = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setAnswers: (state, action) => {
            state.answers = [...state.answers, action.payload]
        }
    },
})

export const {setQuizList, setLoading, setAnswers} = QuizSlice.actions

export default QuizSlice.reducer