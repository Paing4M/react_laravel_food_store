import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'
import Price from './Price'

const Thumbnail = ({ foods }) => {
	return (
		<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6'>
			{foods?.map((res) => (
				<li key={res.id}>
					<Link
						to={`/food/${res.id}`}
						className='flex flex-col rounded-md shadow border overflow-hidden text-[#424242] h-[22.5rem]'
					>
						<img
							className=' object-cover h-[14.5rem]'
							src={`${import.meta.env.VITE_API_URL}foods_img/${
								res.imageUrl
							}`}
							alt=''
						/>

						<div className='p-3 relative'>
							<div className='font-bold'>{res.name}</div>
							<span
								className={`${
									res.favorite ? 'text-[#E72929]' : 'text-gray-400'
								} text-xl absolute right-3 top-3`}
							>
								❤
							</span>

							<div className='my-1'>
								<StarRating stars={res.stars} />
							</div>

							<div className='flex items-center justify-between'>
								<div className='flex-[9]'>
									{res.origins.split(',').map((origin) => (
										<span
											className='mr-2 rounded text-gray-500 bg-gray-200 text-[.9rem] px-2 my-1 inline-block'
											key={origin}
										>
											{origin}
										</span>
									))}
								</div>

								<div className='flex-[3] text-right text-[.9rem]'>
									🕛<span>{res.cookTime}</span>
								</div>
							</div>

							<div className='mt-1 text-xl font-bold'>
								<Price price={res.price} />
							</div>
						</div>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Thumbnail
