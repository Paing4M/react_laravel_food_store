import { useReducer } from 'react'

const initialState = {
	foods: [],
	tags: [],
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'FOODS_LOADED':
			return { ...state, foods: action.payload }

		case 'TAGS_LOADED':
			return { ...state, tags: action.payload }

		default:
			return state
	}
}

export const useFoodReducer = () => useReducer(reducer, initialState)
