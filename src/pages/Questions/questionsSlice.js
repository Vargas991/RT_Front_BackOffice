import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
	questions: []

}

export const questionsSlice = createSlice({
	name: 'Questions',
	initialState,
	reducers: {
		setQuestion: (state, action) => {
			state.questions = [
				...state.questions,
				action.payload
			]
		},
		setDeleteQuestion: (state, action) =>{
			state.questions = action.payload
		}
	}
})

export const { setQuestion, setDeleteQuestion } = questionsSlice.actions

export default questionsSlice.reducer
