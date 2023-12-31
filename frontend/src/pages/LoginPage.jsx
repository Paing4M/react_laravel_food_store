import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button'
import * as userService from '../services/UserService'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
	const { user, login, errors } = useAuth()
	const [params] = useSearchParams()
	const returnUrl = params.get('returnUrl')
	const navigate = useNavigate()
	const [inputFields, setInputFields] = useState({
		email: '',
		password: '',
	})

	useEffect(() => {
		if (!user) return
		returnUrl ? navigate(returnUrl) : navigate('/')
	}, [user])

	const handleChange = (e) => {
		setInputFields({ ...inputFields, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const data = {
			email: inputFields.email,
			password: inputFields.password,
		}
		await login(data)
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

					<Button type={'submit'} text='Login' width={'w-full'} />

					<p className='mt-2 text-center text-[.9rem] text-gray-500'>
						Dont't have an account ?{' '}
						<Link
							className='text-black font-bold'
							to={`/register${
								returnUrl ? '?returnUrl=' + returnUrl : ''
							}`}
						>
							Register here
						</Link>
					</p>
				</form>
			</div>
		</div>
	)
}

export default LoginPage
