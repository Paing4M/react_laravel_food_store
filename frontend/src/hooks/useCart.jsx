import { useState } from 'react'
import { createContext } from 'react'
import { sample_foods } from '../../data'
import { useContext } from 'react'
import { useEffect } from 'react'

const CartContext = createContext()
const CART_KEY = 'cart'
const EMPTY_CART = {
	items: [],
	totalPrice: 0,
	totalCount: 0,
}

export const CartProvider = ({ children }) => {
	const initCart = getCartFromLocalStorage()

	const [cartItems, setCartItems] = useState(initCart.items)
	const [totalPrice, setTotalPrice] = useState(initCart.totalPrice)
	const [totalCount, setTotalCount] = useState(initCart.totalPrice)

	function getCartFromLocalStorage() {
		const cart = localStorage.getItem(CART_KEY)
		return cart ? JSON.parse(cart) : EMPTY_CART
	}

	useEffect(() => {
		const count = sum(cartItems?.map((item) => item.quantity))
		const price = sum(cartItems?.map((item) => item.price))

		setTotalPrice(price)
		setTotalCount(count)

		localStorage.setItem(
			CART_KEY,
			JSON.stringify({
				items: cartItems,
				totalCount,
				totalPrice,
			})
		)
	}, [cartItems])

	const sum = (items) => {
		return items?.reduce((prev, curr) => prev + curr, 0)
	}

	const removeFromCart = (id) => {
		const items = cartItems.filter((item) => item.food.id !== id)
		setCartItems(items)
	}

	const changeQty = (cartItem, qty) => {
		const { food } = cartItem

		const changeCartItem = {
			...cartItem,
			quantity: qty,
			price: food?.price * qty,
		}

		setCartItems(
			cartItems?.map((item) =>
				item?.food?.id == food?.id ? changeCartItem : item
			)
		)
	}

	const addToCart = (food) => {
		if (!cartItems) {
			setCartItems([{ food, quantity: 1, price: food.price }])
			return
		}

		const cartItem = cartItems?.find((item) => food?.id == item?.food?.id)

		if (cartItem) {
			changeQty(cartItem, cartItem.quantity + 1)
		} else {
			setCartItems([...cartItems, { food, quantity: 1, price: food.price }])
		}
	}

	return (
		<CartContext.Provider
			value={{
				cart: { items: cartItems, totalPrice, totalCount },
				removeFromCart,
				changeQty,
				totalCount,
				totalPrice,
				addToCart,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => useContext(CartContext)
