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

const RegisterPage = () => {
	const { user, register, errors } = useAuth()
	const [params] = useSearchParams()
	const returnUrl = params.get('returnUrl')
	const navigate = useNavigate()
	const [inputFields, setInputFields] = useState({
		name: '',
		email: '',
		password: '',
		password_confirmation: '',
	})

	useEffect(() => {
		if (!user) return
		returnUrl ? navigate(returnUrl) : navigate('/')
	}, [user])

	console.log(user)

	const handleChange = (e) => {
		setInputFields({ ...inputFields, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const data = {
			name: inputFields.name,
			email: inputFields.email,
			password: inputFields.password,
			password_confirmation: inputFields.password_confirmation,
		}

		await register(data)
	}

	return (
		<div className='flex items-center justify-center h-screen '>
			<div className='p-4 rounded-lg shadow-md w-full max-w-[450px] border border-gray-100'>
				<Title title={'Register'} margin={'mb-4'} />

				{errors?.incorrect && (
					<div className='text-[.9rem] text-red-500 px-2'>
						{errors?.incorrect}
					</div>
				)}

				<form onSubmit={handleSubmit} noValidate>
					<Input
						value={inputFields.name}
						onChange={handleChange}
						label={'name'}
						type={'name'}
						name={'name'}
						error={errors?.name}
					/>

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

					<Input
						value={inputFields.password_confirmation}
						onChange={handleChange}
						label={'password confirmation'}
						type={'password'}
						name={'password_confirmation'}
						error={errors?.password_confirmation}
					/>

					<Button type={'submit'} text='Register' width={'w-full'} />

					<p className='mt-2 text-center text-[.9rem] text-gray-500'>
						Already register ?{' '}
						<Link
							className='text-black font-bold'
							to={`/login${returnUrl ? '?returnUrl=' + returnUrl : ''}`}
						>
							Login here
						</Link>
					</p>
				</form>
			</div>
		</div>
	)
}

export default RegisterPage
