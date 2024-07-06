// components/PageTransition.tsx
import {
	motion,
	AnimatePresence,
	AnimationProps,
	useViewportScroll,
	useTransform,
} from 'framer-motion'
import { FC, ReactNode } from 'react'

interface PageTransitionProps {
	children: ReactNode
}

const PageTransition: FC<PageTransitionProps & AnimationProps> = ({
	children,
}) => {
	return (
		<AnimatePresence mode='wait'>
			<motion.div
				initial={{ opacity: 0, translateY: -50 }}
				animate={{ opacity: 1, translateY: 0 }}
				exit={{ opacity: 0, translateX: 100 }}
				transition={{ duration: .5 }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}

export default PageTransition
