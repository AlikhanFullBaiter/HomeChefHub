import React, { useState } from 'react'
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaLocationArrow,
	FaMobileAlt,
} from 'react-icons/fa'
import footerLogo from '../../assets/logo.png'

const Footer = () => {
	return (
		<div className='bg-gray-100 dark:bg-gray-950'>
			<section className='max-w-[1440px] mx-auto'>
				<div className=' grid md:grid-cols-3 py-5'>
					<div className=' py-8 px-4 '>
						<h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
							<img src={footerLogo} alt='Logo' className='max-w-[50px]' />
							Home Chef Hub
						</h1>

						<br />
						<div className='flex items-center gap-3'>
							<FaLocationArrow />
							<p>Astana, Kazakhstan</p>
						</div>
						<div className='flex items-center gap-3 mt-3'>
							<FaMobileAlt />
							<p>+7 777 777 77 77 </p>
						</div>
						{/* Social Handle */}
						<div className='flex items-center gap-3 mt-6'>
							<a href='#'>
								<FaInstagram className='text-3xl text-pink-500' />
							</a>
							<a href='#'>
								<FaFacebook className='text-3xl text-blue-500' />
							</a>
							<a href='#'>
								<FaLinkedin className='text-3xl text-blue-600' />
							</a>
						</div>
					</div>
					<div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 '>
						<div className=''>
							<div className='py-8 px-4 '>
								<h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
									Important Links
								</h1>
								<ul className={`flex flex-col gap-3`}>
									<li className='cursor-pointer'>Home</li>
									<li className='cursor-pointer'>About</li>
									<li className='cursor-pointer'>Services</li>
									<li className='cursor-pointer'>Login</li>
								</ul>
							</div>
						</div>
						<div className=''>
							<div className='py-8 px-4 '>
								<h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
									Links
								</h1>
								<ul className='flex flex-col gap-3'>
									<li className='cursor-pointer'>Home</li>
									<li className='cursor-pointer'>About</li>
									<li className='cursor-pointer'>Services</li>
									<li className='cursor-pointer'>Login</li>
								</ul>
							</div>
						</div>
						<div className=''>
							<div className='py-8 px-4 '>
								<h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
									Links
								</h1>
								{/* <ul className="list-disc list-inside"> */}
								<ul className='flex flex-col gap-3'>
									<li className='cursor-pointer'>Home</li>
									<li className='cursor-pointer'>About</li>
									<li className='cursor-pointer'>Services</li>
									<li className='cursor-pointer'>Login</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className='text-center py-10 border-t-2 border-gray-300/50'>
						@copyright 2025 All rights reserved
					</div>
				</div>
			</section>
		</div>
	)
}

export default Footer
