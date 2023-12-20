import axios from 'axios'

const token = localStorage.getItem('token')
	? JSON.parse(localStorage.getItem('token'))
	: null

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		Authorization: 'Bearer ' + token,
	},
})
