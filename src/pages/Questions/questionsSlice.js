import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
	sections: [],
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
		},

		cleanQuestions: (state) =>{
			state.questions = []
		},
		setSections: (state, action) => {
			state.sections = [
				...state.sections,
				action.payload
			]
		},
		setDeleteSections: (state, action) =>{
			state.sections = action.payload
		},

	}
})

export const { setQuestion, setDeleteQuestion, cleanQuestions , setSections, setDeleteSections} = questionsSlice.actions

export default questionsSlice.reducer
