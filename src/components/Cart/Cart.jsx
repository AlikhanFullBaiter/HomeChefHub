import React from 'react'
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
	const { cart, removeFromCart } = useCart()
	const navigate = useNavigate()

	const totalPrice = cart
		.reduce((sum, item) => sum + item.price * item.quantity, 0)
		.toFixed(2)

	return (
		<div className='container mx-auto py-10'>
			<h1 className='text-3xl font-bold text-center mb-6'>Shopping Cart</h1>
			{cart.length === 0 ? (
				<p className='text-center text-gray-500'>Your shopping cart is empty</p>
			) : (
				<div className='max-w-lg mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-lg'>
					<ul>
						{cart.map((item, index) => (
							<li
								key={index}
								className='flex justify-between items-center py-2 border-b border-gray-300'
							>
								<span>
									{item.dishName} from {item.chefName}
									<span className='text-primary font-bold'>
										{' '}
										(x{item.quantity})
									</span>
								</span>
								<span className='flex items-center gap-4'>
									${(item.price * item.quantity).toFixed(2)}
									<button
										onClick={() => removeFromCart(index)}
										className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition'
									>
										Remove
									</button>
								</span>
							</li>
						))}
					</ul>

					<div className='text-lg font-bold text-right mt-4'>
						Total: <span className='text-primary'>${totalPrice}</span>
					</div>

					<div className='flex justify-center mt-6'>
						<button
							onClick={() => navigate('/checkout')}
							className='bg-primary text-white py-2 px-6 rounded-lg text-lg hover:bg-secondary transition'
						>
							Order Now
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default Cart
