import React from 'react'
import { useNavigate } from 'react-router-dom'
import Img from '../../assets/biryani.png'
import Img2 from '../../assets/biryani2.png'
import Img3 from '../../assets/biryani4.png'
import StarRatings from 'react-star-ratings'

const ServicesData = [
	{
		id: 1,
		img: Img2,
		name: 'Plov',
		description:
			'A flavorful and hearty dish made with rice, tender meat, and aromatic spices—a perfect comfort food for any occasion',
	},
	{
		id: 2,
		img: Img2,
		name: 'Kuyrdak',
		description:
			'A traditional meat dish with onions and potatoes, cooked to perfection for a rich, savory experience.',
	},
	{
		id: 3,
		img: Img2,
		name: 'Kazy',
		description:
			'A specialty sausage made from horse meat, seasoned with a unique blend of spices for an authentic taste.',
	},
]

const Services = () => {
	const navigate = useNavigate()

	const handleDishClick = id => {
		navigate(`/menu/${id}`)
	}

	return (
		<>
			<span id='services'></span>
			<div className='pt-12 pb-10'>
				<div className='container'>
					<div className='text-center mb-20 max-w-[400px] mx-auto'>
						<h1 className='text-3xl font-bold'>Menu</h1>
						<p className='text-xs text-gray-400'>
							Explore our selection of mouth-watering dishes crafted with care
							and passion by our expert chefs
						</p>
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 md:gap-5 place-items-center cursor-pointer'>
						{ServicesData.map(service => (
							<div
								key={service.id}
								data-aos='zoom-in'
								data-aos-duration='300'
								className='rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]'
								onClick={() => handleDishClick(service.id)}
							>
								<div className='h-[100px]'>
									<img
										src={service.img}
										alt=''
										className='max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300'
									/>
								</div>
								<div className='p-4 text-center'>
									<div className='w-full '>
										<StarRatings
											rating={4.6}
											starRatedColor='orange'
											isSelectable={false}
											starHoverColor='yellow'
											starDimension='20px'
											changeRating={() => {}}
											numberOfStars={5}
											name='rating'
										/>
									</div>
									<h1 className='text-xl font-bold'>{service.name}</h1>
									<p className='text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2'>
										{service.description}
									</p>
								</div>
							</div>
						))}
					</div>

					<div className='text-center mt-10'>
						<button
							onClick={() => navigate('/menu')}
							className='bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-lg transition duration-300'
						>
							Other Dishes
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Services
