import { FC } from 'react'
import s from './Intro.module.scss'
import myPhoto from '../../assets/img/profiel.png'
import { Link } from 'react-router-dom'
import { RoutePaths } from '../../types/router'
import { useTranslation } from 'react-i18next'

const Intro: FC = () => {
	const { t } = useTranslation()
	return (
		<>
			<div className={s.intro}>
				<div id='container__mq' className={s.container}>
					<figure>
						<img src={myPhoto} alt='developer picture' />
						<article className={s.intro__status}>
							<h5>
								Currently working on <span>Portfolio</span>
							</h5>
							<div className={s.intro__status_box}></div>
						</article>
					</figure>

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
