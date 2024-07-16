import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import github from '../assets/img/Platform=Github, Color=Original.svg'
import instagram from '../assets/img/Platform=Instagram, Color=Original.svg'
import telegram from '../assets/img/Platform=Telegram, Color=Original.svg'
import myPicture from '../assets/img/profiel.png'
import SkillsCard from '../components/Skills/SkillsCard'
import s from './pages.module.scss'

const About: FC = () => {
	const { t } = useTranslation()

	return (
		<>
			<div className={s.aboutMe}>
				<div className={s.about}>
					<section className={s.container}>
						<div id='about__mq' className={s.about__wrapper}>
							<div className={s.about__wrapper_holder}>
								<img className={s.my__picture} src={myPicture} alt='#' />
								<div className={s.about__socials}>
									<a href='https://github.com/Arthur1590' target='_blank'>
										<img property='true' src={github} alt='github' />
									</a>
									<a href='https://t.me/yep_its_me_01' target='_blank'>
										<img src={telegram} alt='telegram' />
									</a>
									<img src={instagram} alt='instagram' />
								</div>
							</div>

							<div className={s.about__wrapper_content}>
								<h5>
									{t('Hello, my full name is')}
									<span> {t('Fazilyanov Artur')}</span>
								</h5>
								<p>
									{t('I’m a self-taught front-end developer based in')}
									<strong> {t('Ferghana')}</strong>,
									<strong>{t('Uzbekistan')}</strong>.
									{t(
										'I can develop responsive websites from scratch and raise them into modern user-friendly web experiences'
									)}
									.
								</p>
								<p>
									{t(
										'Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping variousclients to establish their presence online. I always strive tolearn about the newest technologies and frameworks'
									)}
									.
								</p>
							</div>
						</div>
					</section>
				</div>
				<div className={s.skills}>
					<section className={s.container}>
						<h5 className={s.section__title}>
							{t('About my skillset')} {'/>'}
						</h5>
						<div className={s.skills__wrapper}>
							<SkillsCard />
						</div>
					</section>
				</div>
			</div>
		</>
	)
}

export default About
