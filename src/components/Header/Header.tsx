import { RoutePaths } from '../../types/router'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Switcher from '../UI/Switcher'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import './Header.scss'

interface IHeader {
	classChangeMenu: string
	isTrue: boolean
	setTrue: (state: boolean) => void
}

const Header: FC<IHeader> = ({ isTrue, setTrue, classChangeMenu }) => {
	const { t, i18n } = useTranslation()
	const [view, setView] = useState(false)
	const changeLanguage = (lng: string): void => {
		i18n.changeLanguage(lng)
		setView(!view)
	}
	const classChangeList = clsx(`header__nav_list`, { active: !isTrue })

	return (
		<>
			<header className='header' onClick={e => e.stopPropagation()}>
				<div className='container'>
					<nav id='nav__mq' className='header__nav'>
						<ul className={classChangeList}>
							<div className='lan__change'>
								{!view ? (
									<button onClick={() => changeLanguage('ru')}>Ru {'↑'}</button>
								) : (
									<button onClick={() => changeLanguage('en')}>En {'↓'}</button>
								)}
							</div>
							<li className='header__nav_item'>
								<NavLink to={RoutePaths.HOME} className='header__nav_link'>
									{t('Home')}
								</NavLink>
							</li>
							<li className='header__nav_item'>
								<NavLink to={RoutePaths.ABOUT} className='header__nav_link'>
									{t('About')}
								</NavLink>
							</li>
							<li className='header__nav_item'>
								<NavLink to={RoutePaths.PROJECTS} className='header__nav_link'>
									{t('Projects')}
								</NavLink>
							</li>
							<li className='header__nav_item'>
								<NavLink to={RoutePaths.CONTACTS} className='header__nav_link'>
									{t('Contacts')}
								</NavLink>
							</li>
							<Switcher />
						</ul>

						<div className={classChangeMenu} onClick={() => setTrue(!isTrue)}>
							<span></span>
						</div>
					</nav>
				</div>
			</header>
		</>
	)
}

export default Header
