import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import searchImg from '../assets/search.png'
import MenuData from '../data/Data'

const Menu = () => {
	const [search, setSearch] = useState('')

	const filteredMenu = MenuData.filter(item =>
		item.name.toLowerCase().includes(search.toLowerCase())
	)

	return (
		<div className='container mx-auto py-10 min-h-screen'>
			<h1 className='text-3xl font-bold text-center mb-6'>Our Full Menu</h1>
			<div className='relative max-w-md mx-auto mb-6'>
				<input
					type='text'
					placeholder='Search for a dish...'
					value={search}
					onChange={e => setSearch(e.target.value)}
					className='block w-full p-3 pl-10 border border-gray-300 rounded-full focus:ring-2 dark:focus:ring-primary dark:text-black'
				/>
				<img
					src={searchImg}
					alt='Search'
					className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5'
				/>
			</div>
			<div className='flex flex-col gap-6'>
				{filteredMenu.map(item => (
					<Link
						key={item.id}
						to={`/menu/${item.id}`}
						className='flex items-center gap-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300'
					>
						<img
							src={item.img}
							alt={item.name}
							className='w-24 h-24 object-cover rounded-lg'
						/>
						<div className='flex-1'>
							<h2 className='text-xl font-bold'>{item.name}</h2>
							<p className='text-gray-500'>{item.description}</p>
							<p className='text-primary font-bold'>≈ {item.price}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Menu
