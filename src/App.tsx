import { lazy, useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { RoutePaths } from './types/router'
import ScrollToTop from './utils/ScrollToTop/ScrollTop'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PageTransition from './utils/FrameMotion/PageTransition'
import clsx from 'clsx'
// * lazy
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Contacts = lazy(() => import('./pages/Contacts'))

function App() {
	const location = useLocation()
	const [isTrue, setTrue] = useState(true)
	const classChangeMenu = clsx('menu', { active: !isTrue })

	const menuCloser = () => {
		setTrue(true)
	}

	useEffect(() => {
		menuCloser()
	}, [location])

	return (
		<div className='App' onClick={menuCloser}>
			<ScrollToTop />
			<Header
				classChangeMenu={classChangeMenu}
				isTrue={isTrue}
				setTrue={setTrue}
			/>
			<main className='main'>
				<AnimatePresence mode='wait'>
					<Routes location={location} key={location.pathname}>
						<Route
							path={RoutePaths.HOME}
							element={
								<PageTransition>
									<Home setTrue={setTrue} />
								</PageTransition>
							}
						/>
						<Route
							path={RoutePaths.ABOUT}
							element={
								<PageTransition>
									<About />
								</PageTransition>
							}
						/>
						<Route
							path={RoutePaths.PROJECTS}
							element={
								<PageTransition>
									<Projects />
								</PageTransition>
							}
						/>
						<Route
							path={RoutePaths.PROJECT_DETAILS}
							element={
								<PageTransition>
									<ProjectDetail />
								</PageTransition>
							}
						/>
						<Route
							path={RoutePaths.CONTACTS}
							element={
								<PageTransition>
									<Contacts />
								</PageTransition>
							}
						/>
					</Routes>
				</AnimatePresence>
			</main>
			<Footer />
		</div>
	)
}

export default App
