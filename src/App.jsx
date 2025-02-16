import React from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services.jsx'
import Banner from './components/Banner/Banner.jsx'
import Footer from './components/Footer/Footer.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Routes, Route } from 'react-router-dom'
import Menu from './pages/Menu.jsx'
import DishDetails from './pages/DishDetails.jsx'
import About from './pages/About.jsx'
import { CartProvider } from './context/CartContext.jsx'
import Checkout from './pages/Checkout.jsx'

const App = () => {
	React.useEffect(() => {
		AOS.init({
			offset: 100,
			duration: 500,
			easing: 'ease-in-sine',
			delay: 100,
		})
		AOS.refresh()
	}, [])

	return (
		<CartProvider>
			<div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Hero />
								<Services />
							</>
						}
					/>
					<Route path='/menu' element={<Menu />} />
					<Route path='/about' element={<About />} />
					<Route path='/menu/:id' element={<DishDetails />} />
					<Route path='/checkout' element={<Checkout />} />
				</Routes>
				<Footer />
			</div>
		</CartProvider>
	)
}

export default App
