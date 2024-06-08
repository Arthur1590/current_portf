import { FC, useEffect } from 'react'
import { useThemeStore } from '../../store/Store'

const Switcher: FC = () => {
	const { theme, toggleTheme, initTheme } = useThemeStore()
	
	useEffect(() => {
		initTheme()
	}, [initTheme])

	return (
		<button onClick={toggleTheme}>{theme}</button>
	)
}

export default Switcher