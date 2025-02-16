import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
	const { cart, clearCart } = useCart()
	const navigate = useNavigate()

	const [address, setAddress] = useState('')
	const [paymentMethod, setPaymentMethod] = useState('')

	const totalPrice = cart
		.reduce((sum, item) => sum + item.price * item.quantity, 0)
		.toFixed(2)

	const handleOrder = () => {
		if (!address || !paymentMethod) {
			alert('Please enter your address and select a payment method.')
			return
		}

		clearCart()
		alert('Your order has been placed successfully!')
		navigate('/')
	}

	return (
		<div className='container mx-auto py-10'>
			<h1 className='text-3xl font-bold text-center mb-6'>Checkout</h1>
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
							<span>${(item.price * item.quantity).toFixed(2)}</span>
						</li>
					))}
				</ul>

				<div className='text-lg font-bold text-right mt-4'>
					Total: <span className='text-primary'>${totalPrice}</span>
				</div>

				<div className='mt-4'>
					<label className='block font-semibold mb-1'>Delivery Address:</label>
					<input
						type='text'
						value={address}
						onChange={e => setAddress(e.target.value)}
						placeholder='Enter your address'
						className='w-full p-2 border rounded-lg dark:text-black'
					/>
				</div>

				<div className='mt-4'>
					<label className='block font-semibold mb-1 '>Payment Method:</label>
					<select
						value={paymentMethod}
						onChange={e => setPaymentMethod(e.target.value)}
						className='w-full p-2 border rounded-lg dark:text-black'
					>
						<option value=''>Select payment method</option>
						<option value='Credit Card'>Credit Card</option>
						<option value='PayPal'>PayPal</option>
						<option value='Cash on Delivery'>Cash on Delivery</option>
					</select>
				</div>

				<div className='flex justify-center mt-6'>
					<button
						onClick={handleOrder}
						className='bg-primary text-white py-2 px-6 rounded-lg text-lg hover:bg-secondary transition'
					>
						Confirm Order
					</button>
				</div>
			</div>
		</div>
	)
}

export default Checkout
