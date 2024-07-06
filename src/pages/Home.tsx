import { FC } from 'react'
import Intro from '../components/Intro/Intro'
import FluidEnhanced from '../utils/fluid/FluidEnhanced'

const Home: FC = () => {
	return (
		<div>
			<FluidEnhanced />

			<Intro />
		</div>
	)
}

export default Home
