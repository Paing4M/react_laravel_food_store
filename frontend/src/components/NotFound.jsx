import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = ({ text, linkTo, linkText }) => {
	return (
		<div className='flex items-center justify-center flex-col font-bold'>
			{text}
			<Link
				to={linkTo}
				className='mt-2 bg-red-600 text-white rounded-lg px-4 py-1 opacity-80 hover:opacity-100 font-normal'
			>
				{linkText}
			</Link>
		</div>
	)
}

NotFound.defaultProps = {
	text: 'Not Found !',
	linkTo: '/',
	linkText: 'Go To Home Page',
}

export default NotFound
