import Header from '../components/Header'

const UserLayout = ({ children }) => {
	return (
		<div className='max-w-[1300px] mx-auto'>
			<Header />
			<div className='px-10 py-6'>{children}</div>
		</div>
	)
}

export default UserLayout
