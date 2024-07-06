import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useFollowPointer } from './useFollowPointer'

const FollowPointer = () => {
	const ref = useRef(null)
	const { x, y } = useFollowPointer(ref)
	return (
		<motion.div
			ref={ref}
			className='box'
			id='box1'
			style={{
				x,
				y,
			}}
		/>
	)
}

export default FollowPointer
