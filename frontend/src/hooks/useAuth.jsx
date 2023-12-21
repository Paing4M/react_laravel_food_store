import { useState } from 'react'
import { createContext } from 'react'
import * as userService from '../services/UserService'
import { useContext } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(userService.getUser())
	const [errors, setErrors] = useState(null)

	const login = async (data) => {
		try {
			const res = await userService.login(data)
			if (res.status == 200) {
				// clear the errors
				setErrors(null)
				setUser(res.user)
				localStorage.setItem('user', JSON.stringify(res.user))
				localStorage.setItem('token', JSON.stringify(res.token))
			}
		} catch (error) {
			// validation err
			if (error.response.status === 422) {
				setErrors(error.response.data.errors)
			}

			// incorrect
			if (error.response.status === 401) {
				setErrors({ incorrect: error.response.data.message })
			}
		}
	}

	const register = async (data) => {
		try {
			const res = await userService.register(data)
			console.log(res)
			if (res.status == 200) {
				// clear the errors
				setErrors(null)
				setUser(res.user)
				localStorage.setItem('user', JSON.stringify(res.user))
				localStorage.setItem('token', JSON.stringify(res.token))
			}
		} catch (error) {
			// validation err
			if (error.response.status === 422) {
				setErrors(error.response.data.errors)
			}
		}
	}

	const logout = async () => {
		try {
			const res = await userService.logout()
			if (res) {
				setUser(null)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<AuthContext.Provider value={{ login, logout, register, user, errors }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
