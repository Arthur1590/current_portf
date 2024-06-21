// components/PageTransition.tsx
import { motion, AnimatePresence, AnimationProps } from 'framer-motion'
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
				initial={{ opacity: 0, translateX: 50 }}
				animate={{ opacity: 1,  translateX: 0}}
				exit={{ opacity: 0, translateX: 100 }}
				transition={{ duration: 0.5 }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}

export default PageTransition
