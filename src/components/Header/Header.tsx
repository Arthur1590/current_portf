import { Link } from 'react-router-dom'
import { RoutePaths } from '../../types/router'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Switcher from '../UI/Switcher'
import s from './Header.module.scss'
import clsx from 'clsx'

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

	const classChangeList = clsx(`${s.header__nav_list}`, { active: !isTrue })

	return (
		<>
			<header className='header' onClick={(e)=> e.stopPropagation()}>
				<div className={s.container}>
					<nav id='nav__mq' className={s.header__nav}>
						<ul className={classChangeList}>
							<div className={s.lan__change}>
								{!view ? (
									<button onClick={() => changeLanguage('ru')}>Ru {'↑'}</button>
								) : (
									<button onClick={() => changeLanguage('en')}>En {'↓'}</button>
								)}
							</div>
							<li className={s.header__nav_item}>
								<Link to={RoutePaths.HOME} className={s.header__nav_link}>
									{t('Home')}
								</Link>
							</li>
							<li className={s.header__nav_item}>
								<Link to={RoutePaths.ABOUT} className={s.header__nav_link}>
									{t('About')}
								</Link>
							</li>
							<li className={s.header__nav_item}>
								<Link to={RoutePaths.PROJECTS} className={s.header__nav_link}>
									{t('Projects')}
								</Link>
							</li>
							<li className={s.header__nav_item}>
								<Link to={RoutePaths.CONTACTS} className={s.header__nav_link}>
									{t('Contacts')}
								</Link>
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
