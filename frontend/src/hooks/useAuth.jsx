import { useState } from 'react'
import { createContext } from 'react'
import * as userService from '../services/UserService'
import { useContext } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(userService.getUser())

	const login = async (data) => {
		setUser(data.user)
		localStorage.setItem('user', JSON.stringify(data.user))
		localStorage.setItem('token', JSON.stringify(data.token))
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
		<AuthContext.Provider value={{ login, logout, user }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
