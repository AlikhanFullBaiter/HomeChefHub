import img from '../assets/biryani.png'
import img2 from '../assets/biryani2.png'
import img3 from '../assets/biryani3.png'
import img4 from '../assets/biryani4.png'
import img5 from '../assets/biryani5.png'

import chef1 from '../assets/chefWomen1.jpeg'
import chef2 from '../assets/chefMan1.jpg'
import chef3 from '../assets/chefWomen2.webp'
import chef4 from '../assets/chefWomen3.webp'
import chef5 from '../assets/chefMan2.jpg'
import chef6 from '../assets/ChefMan3.jpg'
import chef7 from '../assets/ChefWomen4.webp'
import chef8 from '../assets/chefMan4.jpg'

const MenuData = [
	{
		id: 1,
		name: 'Plov',
		description: 'A classic dish with rice, meat, and spices.',
		price: '$10',
		img: img,
		chefs: [
			{
				id: 1,
				name: 'Alina',
				rating: 4.5,
				photo: chef1,
				price: 5,
			},
			{
				id: 2,
				name: 'Askar',
				rating: 4.0,
				photo: chef2,
				price: 7,
			},
			{
				id: 7,
				name: 'Bota',
				rating: 4.5,
				photo: chef7,
				price: 3,
			},
			{
				id: 8,
				name: 'Farkhad',
				rating: 4.9,
				photo: chef8,
				price: 5,
			},
		],
	},
	{
		id: 2,
		name: 'Kuyrdak',
		description: 'Traditional Kazakh stew made with meat and potatoes.',
		price: '$12',
		img: img4,
		chefs: [
			{
				id: 3,
				name: 'Merey',
				rating: 4.8,
				photo: chef3,
				price: 7.5,
			},
			{
				id: 4,
				name: 'Zhibek',
				rating: 3.5,
				photo: chef4,
				price: 8,
			},
			{
				id: 7,
				name: 'Bota',
				rating: 4.5,
				photo: chef7,
				price: 9,
			},
			{
				id: 6,
				name: 'Oleg',
				rating: 3.2,
				photo: chef6,
				price: 4.5,
			},
		],
	},
	{
		id: 3,
		name: 'Kazy',
		description: 'Horse meat sausage, a delicacy in Central Asia.',
		price: '$15',
		img: img5,
		chefs: [
			{
				id: 3,
				name: 'Merey',
				rating: 4.8,
				photo: chef3,
				price: 8,
			},
			{
				id: 4,
				name: 'Zhibek',
				rating: 3.5,
				photo: chef4,
				price: 10,
			},
			{
				id: 1,
				name: 'Alina',
				rating: 4.5,
				photo: chef1,
				price: 12,
			},
			{
				id: 5,
				name: 'Anuar',
				rating: 4.5,
				photo: chef5,
				price: 8,
			},
		],
	},
	{
		id: 4,
		name: 'Shashlik',
		description: 'Grilled meat skewers with a smoky flavor.',
		price: '$8',
		img: img,
	},
	{
		id: 5,
		name: 'Beshbarmak',
		description:
			'Traditional Kazakh dish made with boiled meat, noodles, and onion sauce.',
		price: '$18',
		img: img2,
	},
	{
		id: 6,
		name: 'Manti',
		description:
			'Steamed dumplings filled with minced meat and served with sour cream.',
		price: '$14',
		img: img,
	},
	{
		id: 7,
		name: 'Samsa',
		description:
			'Savory pastry filled with meat and spices, baked to perfection.',
		price: '$6',
		img: img3,
	},
	{
		id: 8,
		name: 'Kurt',
		description: 'Dried cheese balls, a popular snack in Central Asia.',
		price: '$5',
		img: img,
	},
	{
		id: 9,
		name: 'Zharkoe',
		description: 'Kazakh beef stew with vegetables and aromatic spices.',
		price: '$16',
		img: img,
	},
	{
		id: 10,
		name: 'Balyk',
		description: 'Smoked or fried fish, typically served with fresh herbs.',
		price: '$12',
		img: img,
	},
]

export default MenuData
