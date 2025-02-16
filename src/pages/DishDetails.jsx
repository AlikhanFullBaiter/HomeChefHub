import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCartShopping } from 'react-icons/fa6'
import { useCart } from '../context/CartContext'
import MenuData from '../data/Data'
import Cart from '../components/Cart/Cart'
import StarRatings from 'react-star-ratings'

const DishDetails = () => {
	const { id } = useParams()
	const dish = MenuData.find(item => item.id === parseInt(id))
	const { cart, addToCart } = useCart()
	const [selectedChef, setSelectedChef] = useState(null)

	if (!dish) {
		return <div>Dish not found</div>
	}

	const handleChefSelect = chef => {
		setSelectedChef(prevChef => (prevChef?.id === chef.id ? null : chef))
	}

	const averagePrice = dish.chefs
		? (
				dish.chefs.reduce((sum, chef) => sum + chef.price, 0) /
				dish.chefs.length
		  ).toFixed(2)
		: null

	return (
		<div className='flex justify-center'>
			<div className='container mx-auto py-10'>
				<div className='flex items-center gap-6 max-w-4xl mx-auto'>
					<img
						src={dish.img}
						alt={dish.name}
						className='w-[250px] object-cover rounded-lg'
					/>
					<div className='flex-1'>
						<h1 className='text-4xl font-bold'>{dish.name}</h1>
						<p className='text-lg my-4'>{dish.description}</p>
						<p className='text-2xl font-bold text-primary'>
							{selectedChef
								? `$${selectedChef.price.toFixed(2)}`
								: `≈ $${averagePrice}`}
						</p>
					</div>
				</div>
				<div className='mt-16'>
					<h2 className='text-3xl font-bold text-center mb-6'>
						Choose Your Chef
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
						{dish.chefs.map(chef => (
							<motion.div
								key={chef.id}
								className={`flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer ${
									selectedChef?.id === chef.id ? 'border-4 border-primary' : ''
								}`}
								onClick={() => handleChefSelect(chef)}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.9 }}
							>
								<img
									src={chef.photo}
									alt={chef.name}
									className='w-24 h-24 object-cover rounded-full mb-4'
								/>
								<h3 className='text-xl font-semibold'>{chef.name}</h3>
								<StarRatings
									rating={chef.rating}
									starRatedColor='orange'
									isSelectable={false}
									starHoverColor='yellow'
									starDimension='20px'
									changeRating={() => {}}
									numberOfStars={5}
									name='rating'
								/>
								<p className='text-gray-500 mt-2'>
									Price: ${chef.price.toFixed(2)}
								</p>
							</motion.div>
						))}
					</div>
				</div>
				<AnimatePresence>
					{selectedChef && (
						<motion.div
							className='mt-10 text-center'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.2 }}
						>
							<h3 className='text-xl font-semibold'>
								You selected {selectedChef.name}!
							</h3>
							<p className='text-lg'>Rating: {selectedChef.rating}</p>
							<p className='text-lg'>Price: ${selectedChef.price.toFixed(2)}</p>
							<div className='flex justify-center mt-6'>
								<button
									onClick={() => {
										addToCart(dish, selectedChef)
										console.log('Added:', dish.name, 'from', selectedChef.name)
									}}
									className='bg-primary text-white py-2 px-6 rounded-lg flex justify-center items-center space-x-2'
								>
									<span>Add to Cart</span>
									<FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
								</button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				<div className='w-full max-w-4xl mx-auto mt-12'>
					<Cart cart={cart} />
				</div>
			</div>
		</div>
	)
}

export default DishDetails
