import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getById } from '../services/foodService'
import StarRating from '../components/StarRating'
import Price from '../components/Price'
import Tags from '../components/Tags'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import NotFound from '../components/NotFound'

const FoodDetailPage = () => {
	const [food, setFood] = useState({})
	const { id } = useParams()
	const { addToCart } = useCart()

	useEffect(() => {
		getById(id)
			.then((res) => setFood(res))
			.catch((err) => {
				if (err.response.status === 404) {
					setFood(null)
				}
			})
	}, [id])

	return (
		<>
			{!food ? (
				<NotFound text={'Food Not Found !'} />
			) : (
				<div className='flex items-center flex-wrap'>
					<img
						className='min-w-[25rem] max-w-[40rem] rounded-[2rem] m-4 flex-1'
						src={'/foods/' + food.imageUrl}
						alt=''
					/>
					<div className='min-w-[25rem] max-w-[40rem] m-4 w-full  flex-1 '>
						<div className='flex items-center'>
							<div className='font-bold text-2xl'>{food.name}</div>
							<span
								className={`${
									food.favorite ? 'text-[#E72929]' : 'text-gray-400'
								} text-2xl ml-5`}
							>
								❤
							</span>
						</div>

						<div className='my-1'>
							<StarRating stars={food.stars} />
						</div>

						<div className=''>
							{food?.origins?.split(',').map((origin) => (
								<span
									className='mr-2 rounded text-gray-500 bg-gray-200 text-[.9rem] px-2 my-1 inline-block'
									key={origin}
								>
									{origin}
								</span>
							))}
						</div>

						<div className='my-2'>
							{food?.tags && (
								<Tags
									tags={food.tags
										.split(',')
										.map((tag) => ({ name: tag }))}
								/>
							)}
						</div>

						<div>
							Time to cook about <strong>{food.cookTime}</strong> minutes
						</div>

						<div className='mt-1 text-2xl font-bold'>
							<Price price={food.price} />
						</div>

						<button
							onClick={() => addToCart(food)}
							className='mt-3 w-[50%] bg-red-500 py-2 hover:bg-red-600  text-white rounded-full'
						>
							Add To Cart
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default FoodDetailPage
