import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	usename: "",
	password: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state) => {
			state.usename = 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { login } = userSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
	setTimeout(() => {
		dispatch(incrementByAmount(amount));
	}, 1000);
};

export default userSlice.reducer;
