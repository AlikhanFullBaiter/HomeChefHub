import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import DarkMode from './DarkMode'
import { FaShoppingCart } from 'react-icons/fa'

const Menu = [
	{
		id: 1,
		name: 'Home',
		link: '/',
	},
	{
		id: 2,
		name: 'Menu',
		link: '/menu',
	},
	{
		id: 3,
		name: 'About',
		link: '/about',
	},
]

const Navbar = () => {
	const navigate = useNavigate()

	const handleOrderNowClick = () => {
		navigate('/menu')
	}

	return (
		<div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200'>
			<div className='container py-3 sm:py-0'>
				<div className='flex justify-between items-center'>
					<div>
						<a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2'>
							<img src={Logo} alt='Logo' className='w-10' />
							Home Chef Hub
						</a>
					</div>
					<div className='flex justify-between items-center gap-4'>
						<div>
							<DarkMode />
						</div>
						<ul className='hidden sm:flex items-center gap-4'>
							{Menu.map(menu => (
								<li key={menu.id}>
									<a
										href={menu.link}
										className='inline-block py-4 px-4 hover:text-yellow-500'
									>
										{menu.name}
									</a>
								</li>
							))}
						</ul>
						<button
							onClick={handleOrderNowClick}
							className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 capitalize'
						>
							order now
							<FaShoppingCart className='text-xl text-white drop-shadow-sm cursor-pointer' />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
