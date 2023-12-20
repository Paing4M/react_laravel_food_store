import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Search = () => {
	const [term, setTerm] = useState('')
	const { searchTerm } = useParams()
	const navigate = useNavigate()

	const search = () => {
		term ? navigate(`/search/${term}`) : navigate('/')
	}

	useEffect(() => {
		if (term == '') navigate('/')
	}, [term])

	useEffect(() => {
		setTerm(searchTerm ?? '')
	}, [searchTerm])

	return (
		<div className='mb-4'>
			<div className='flex items-center w-full md:w-[50%] mx-auto   rounded-full'>
				<input
					className='outline-none flex-1 py-3 px-4 bg-gray-100 rounded-l-full'
					type='text'
					placeholder='Search ...'
					onChange={(e) => setTerm(e.target.value)}
					onKeyUp={(e) => e.key === 'Enter' && search()}
					value={term}
				/>
				<div
					onClick={search}
					className='bg-red-500 mx-auto rounded-r-full py-3 px-6 cursor-pointer text-white hover:bg-red-600'
				>
					<MagnifyingGlassIcon className='w-6 font-bold' />
				</div>
			</div>
		</div>
	)
}

export default Search
