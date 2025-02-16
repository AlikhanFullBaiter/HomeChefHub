import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(() => {
		const savedCart = localStorage.getItem('cart')
		return savedCart ? JSON.parse(savedCart) : []
	})

	const addToCart = (dish, chef) => {
		setCart(prevCart => {
			const existingItemIndex = prevCart.findIndex(
				item => item.dishId === dish.id && item.chefName === chef.name
			)

			let updatedCart
			if (existingItemIndex !== -1) {
				updatedCart = prevCart.map((item, index) =>
					index === existingItemIndex
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			} else {
				updatedCart = [
					...prevCart,
					{
						dishId: dish.id,
						dishName: dish.name,
						chefName: chef.name,
						price: chef.price,
						quantity: 1,
					},
				]
			}

			localStorage.setItem('cart', JSON.stringify(updatedCart))
			return updatedCart
		})
	}

	const removeFromCart = index => {
		setCart(prevCart => {
			let updatedCart = [...prevCart]
			if (updatedCart[index].quantity > 1) {
				updatedCart[index].quantity -= 1
			} else {
				updatedCart.splice(index, 1)
			}

			localStorage.setItem('cart', JSON.stringify(updatedCart))
			return updatedCart
		})
	}

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => useContext(CartContext)
