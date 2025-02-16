import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
	// Загружаем корзину из localStorage при загрузке
	const [cart, setCart] = useState(() => {
		const savedCart = localStorage.getItem('cart')
		return savedCart ? JSON.parse(savedCart) : []
	})

	// Функция для добавления товаров в корзину
	const addToCart = (dish, chef) => {
		setCart(prevCart => {
			const existingItemIndex = prevCart.findIndex(
				item => item.dishId === dish.id && item.chefName === chef.name
			)

			let updatedCart
			if (existingItemIndex !== -1) {
				// Если такой товар уже есть, увеличиваем количество порций
				updatedCart = prevCart.map((item, index) =>
					index === existingItemIndex
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			} else {
				// Если товара нет, добавляем новый с quantity = 1
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

	// Функция для удаления товара из корзины
	const removeFromCart = index => {
		setCart(prevCart => {
			let updatedCart = [...prevCart]
			if (updatedCart[index].quantity > 1) {
				// Уменьшаем количество, если порций больше 1
				updatedCart[index].quantity -= 1
			} else {
				// Иначе удаляем товар из корзины
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
