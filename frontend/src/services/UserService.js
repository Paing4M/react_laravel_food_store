import { axiosInstance } from '../config/axiosInstance'

export const getUser = () =>
	localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user'))
		: null

export const login = async (data) => {
	const res = await axiosInstance.post('/api/login', data)
	return res.data
}

export const register = async (data) => {
	const res = await axiosInstance.post('/api/register', data)
	return res.data
}

export const logout = async () => {
	const res = await axiosInstance.post('/api/logout')
	localStorage.removeItem('user')
	localStorage.removeItem('token')
	return res.data
}
