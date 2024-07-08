import { FC } from 'react'
import Intro from '../components/Intro/Intro'
import FluidEnhanced from '../utils/fluid/FluidEnhanced'

interface IHome {
	setTrue: (state: boolean) => void
}
const Home: FC<IHome> = ({ setTrue }) => {
	const menuCloser = () => {
		setTrue(true)
	}

	return (
		<div onClick={menuCloser}>
			<FluidEnhanced />

			<Intro />
		</div>
	)
}

export default Home
