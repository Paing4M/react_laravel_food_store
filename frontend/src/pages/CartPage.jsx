import React from 'react'
import { useCart } from '../hooks/useCart'
import Title from '../components/Title'
import NotFound from '../components/NotFound'

const CartPage = () => {
	const { cart, removeFromCart, changeQty, totalCount, totalPrice } = useCart()

	return (
		<>
			{cart.items.length == 0 ? (
				<NotFound text={'Your cart is empty !'} />
			) : (
				<div>
					<Title title={'Cart'} margin={'mb-4'} />
					{cart?.items && cart?.items?.length > 0 && (
						<div className='grid grid-cols-12 gap-x-6 gap-y-2'>
							<div className='md:col-span-9 col-span-full border rounded-lg shadow p-4 px-6 h-fit'>
								{cart?.items?.map((item, idx) => (
									<div
										key={idx}
										className={`grid grid-cols-5 text-left items-center gap-2 ${
											idx !== cart.items.length - 1 ? 'mb-4' : ''
										} border-b pb-4`}
									>
										<img
											src={'/foods/' + item.food.imageUrl}
											alt=''
											className='w-16 h-16 object-cover rounded-full col-span-2 sm:col-span-1'
										/>
										<h1 className='col-span-2 sm:col-span-1'>
											{item.food.name}
										</h1>
										{/*<h4 className='col-span-2 sm:col-span-1'>
									${item.price}
								</h4>*/}
										<div className='col-span-2 sm:col-span-1'>
											<select
												value={item.quantity}
												onChange={(e) =>
													changeQty(item, Number(e.target.value))
												}
												className='border-b-2 border-gray-400 w-14 cursor-pointer outline-none '
											>
												<option value='1'>1</option>
												<option value='2'>2</option>
												<option value='3'>3</option>
												<option value='4'>4</option>
												<option value='5'>5</option>
												<option value='6'>6</option>
												<option value='7'>7</option>
												<option value='8'>8</option>
											</select>
										</div>

										<div className=' col-span-2 sm:col-span-1'>
											${item.price}
										</div>

										<div className='col-span-2 sm:col-span-1'>
											<button
												onClick={() => removeFromCart(item.food.id)}
												className='rounded-md px-3 py-1 text-red-500 text-sm bg-gray-100 hover:bg-gray-200 hover:text-red-600  '
											>
												Remove
											</button>
										</div>
									</div>
								))}
							</div>

							<div className='md:col-span-3 h-fit col-span-full border rounded-lg shadow p-4'>
								<h1 className='text-lg font-bold border-b pb-2 border-gray-400'>
									Total
								</h1>
								<div className='mt-2 flex justify-between items-center'>
									<h2>Items</h2>
									<span className='font-bold'>{totalCount}</span>
								</div>

								<div className='mt-2 flex justify-between items-center'>
									<h2>SubTotal</h2>
									<span className='font-bold'>$ {totalPrice}</span>
								</div>

								<button className='mt-5 w-full bg-red-500 py-2 rounded-md hover:bg-red-600 text-white'>
									Checkout
								</button>
							</div>
						</div>
					)}
				</div>
			)}
		</>
	)
}

export default CartPage
