import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button'
import * as userService from '../services/UserService'
import { useState } from 'react'

const LoginPage = () => {
	const { user, login } = useAuth()
	const [params] = useSearchParams()
	const returnUrl = params.get('returnUrl')
	const navigate = useNavigate()
	const [inputFields, setInputFields] = useState({
		email: '',
		password: '',
	})
	const [errors, setErrors] = useState(null)

	useEffect(() => {
		if (!user) return
		returnUrl ? navigate(returnUrl) : navigate('/')
	}, [user])

	const handleChange = (e) => {
		setInputFields({ ...inputFields, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const data = {
				email: inputFields.email,
				password: inputFields.password,
			}
			const res = await userService.login(data)
			if (res.status == 200) {
				// clear the errors
				setErrors(null)
				login(res)
				navigate('/')
			}
		} catch (error) {
			console.log(error)
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

	return (
		<div className='flex items-center justify-center h-screen '>
			<div className='p-4 rounded-lg shadow-md w-full max-w-[450px] border border-gray-100'>
				<Title title={'Login'} margin={'mb-4'} />

				{errors?.incorrect && (
					<div className='text-[.9rem] text-red-500 px-2'>
						{errors?.incorrect}
					</div>
				)}

				<form onSubmit={handleSubmit} noValidate>
					<Input
						value={inputFields.email}
						onChange={handleChange}
						label={'email'}
						type={'email'}
						name={'email'}
						error={errors?.email}
					/>

					<Input
						name={'password'}
						value={inputFields.password}
						label={'password'}
						type={'password'}
						error={errors?.password}
						onChange={handleChange}
					/>

					<Button type={'submit'} text='Login' />
				</form>
			</div>
		</div>
	)
}

export default LoginPage
