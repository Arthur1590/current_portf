import { Link } from 'react-router-dom'
import { RoutePaths } from '../../types/router'
import s from './Header.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Header: FC = () => {
	const { t, i18n } = useTranslation()

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng)
	}

	return (
		<>
			<header className='header'>
				<div className={s.container}>
					<nav className={s.header__nav}>
						<ul className={s.header__nav_list}>
							<div className={s.lan__change}>
								<button onClick={() => changeLanguage('en')}>En {'↓'}</button>
								<button onClick={() => changeLanguage('ru')}>Ru {'↑'}</button>
							</div>
							<li className={s.header__nav_item}>
								<Link to={RoutePaths.HOME} className={s.header__nav_link}>
									{t('Home')}
								</Link>
							</li>
							<li className={s.header__nav_item}>
								<Link to={RoutePaths.ABOUT} className={s.header__nav_link}>
									About
								</Link>
							</li>
							<li className={s.header__nav_item}>
								<Link to={RoutePaths.PROJECTS} className={s.header__nav_link}>
									Projects
								</Link>
							</li>
							<li className={s.header__nav_item}>
								<Link to={RoutePaths.CONTACTS} className={s.header__nav_link}>
									Contacts
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	)
}

export default Header
