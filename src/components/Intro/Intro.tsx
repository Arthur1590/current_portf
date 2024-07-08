import { FC } from 'react'
import myPhoto from '../../assets/img/profiel.png'
import { Link } from 'react-router-dom'
import { RoutePaths } from '../../types/router'
import { useTranslation } from 'react-i18next'
import s from './Intro.module.scss'

const Intro: FC = () => {
	const { t } = useTranslation()
	return (
		<>
			<div className={s.intro}>
				<div id='container__mq' className={s.container}>
					<article className={s.intro__content}>
						<h5>
							{t('Hi, I am a')} <span>{t('web designer')}</span> {t('and')}
							<span> {t('front-end developer')}</span>
						</h5>
						<p>
							{t(
								'I craft responsive websites where technologies meet creativity'
							)}
						</p>
						<div className={s.intro__socials}>
							<Link to={RoutePaths.CONTACTS}>
								<button>
									{'< '}
									{t('Contact me')}
									{' />'}
								</button>
							</Link>
						</div>
					</article>
				</div>
			</div>
		</>
	)
}

export default Intro
