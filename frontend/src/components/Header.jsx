import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { useAuth } from '../hooks/useAuth'

const Header = () => {
	const { cart } = useCart()
	const { user, logout } = useAuth()

	console.log(user)

	return (
		<header className='flex items-center justify-between px-10 h-16 shadow md:rounded-full rounded md:mt-6 mt-0'>
			<Link className='font-bold text-2xl' to='/'>
				Food !
			</Link>
			<nav>
				<ul className='text-black flex items-center gap-x-6'>
					{user ? (
						<>
							<li className='relative group'>
								<Link to={'/profile'} className='hover:text-red-500'>
									{user.name}
								</Link>
								<div className='absolute left-[50%] translate-x-[-50%] -bottom-18 hidden rounded-md group-hover:flex bg-gray-100 shadow'>
									<ul className='py-4 px-8'>
										<li className='mb-2'>
											<Link
												className='py-1 hover:text-red-500 block'
												to={'/profile'}
											>
												Profile
											</Link>
										</li>
										<li className='mb-2'>
											<Link
												className='py-1 hover:text-red-500 block'
												to={'/orders'}
											>
												Orders
											</Link>
										</li>
										<li>
											<a
												className='cursor-pointer py-1 hover:text-red-500 block'
												onClick={logout}
											>
												Logout
											</a>
										</li>
									</ul>
								</div>
							</li>

							<li className='flex gap-x-1 items-center hover:text-red-500'>
								<Link to={'/cart'}>Cart</Link>
								{cart.totalCount > 0 && (
									<span className='bg-red-500 text-white px-1 rounded-lg'>
										{cart.totalCount}
									</span>
								)}
							</li>
						</>
					) : (
						<>
							<Link to={'/login'}>Login</Link>
						</>
					)}
				</ul>
			</nav>
		</header>
	)
}

export default Header
