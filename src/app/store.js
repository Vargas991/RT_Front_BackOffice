import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../pages/Login/loginSlice'
import questionsSlice from '../pages/Questions/questionsSlice'

export default configureStore({
	reducer: {
		login: loginReducer,
		questions: questionsSlice
	}
})
