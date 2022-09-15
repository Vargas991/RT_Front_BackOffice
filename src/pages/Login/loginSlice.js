import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
	username: 'Edderson',
	user_id: 1
}

export const loginSlice = createSlice({
	name: 'Login',
	initialState,
	reducers: {
		setUsername: (state, action) => {
			state.username = action.payload
		},
		setUserID: (state, action) => {
			state.user_id = action.payload
		}
	}
})

export const { setUsername, setUserID } = loginSlice.actions

export default loginSlice.reducer
