import Intro from '../components/Intro/Intro'
import FluidEnhanced from '../utils/fluid/FluidEnhanced'
import s from './pages.module.scss'
const Home = () => {
	return (
		<>
			<div className={s.home__wrapper}>
				<FluidEnhanced />

				<Intro />
			</div>
		</>
	)
}

export default Home
