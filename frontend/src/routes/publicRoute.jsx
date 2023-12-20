import { createBrowserRouter } from 'react-router-dom'
import UserLayout from '../layout/UserLayout'
import HomePage from '../pages/HomePage'
import FoodDetailPage from '../pages/FoodDetailPage'
import CartPage from '../pages/CartPage'
import LoginPage from '../pages/LoginPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<UserLayout>
				<HomePage />
			</UserLayout>
		),
	},

	{
		path: '/search/:searchTerm',
		element: (
			<UserLayout>
				<HomePage />
			</UserLayout>
		),
	},

	{
		path: '/tag/:tag',
		element: (
			<UserLayout>
				<HomePage />
			</UserLayout>
		),
	},

	{
		path: '/food/:id',
		element: (
			<UserLayout>
				<FoodDetailPage />
			</UserLayout>
		),
	},

	{
		path: '/cart',
		element: (
			<UserLayout>
				<CartPage />
			</UserLayout>
		),
	},

	{
		path: '/login',
		element: <LoginPage />,
	},
])
