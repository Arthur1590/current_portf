import { animated, useSpring } from '@react-spring/web'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import github from '../assets/img/Platform=Github, Color=Original.svg'
import instagram from '../assets/img/Platform=Instagram, Color=Original.svg'
import telegram from '../assets/img/Platform=Telegram, Color=Original.svg'
import myPicture from '../components/Intro/img/MyPhoto.png'
import SkillsCard from '../components/Skills/SkillsCard'
import s from './pages.module.scss'

const About: FC = () => {
	const springs = useSpring({
		from: { x: -150, y: -150, opacity: 0, scale: 0 },
		to: { x: 0, y: 0, opacity: 1, scale: 1 },
	})
	const article = useSpring({
		from: { x: -150, y: -150, opacity: 0, scale: 0 },
		to: { x: 0, y: 0, opacity: 1, scale: 1 },
	})

	const [grid, apiGrid] = useSpring(() => ({
		from: { x: -150, y: -1000, opacity: 0, scale: 0 },
	}))

	const { ref: refGrid, inView: inViewGrid } = useInView({
		triggerOnce: true,
		onChange: inView => {
			if (inView) {
				apiGrid.start({ x: 0, y: 0, opacity: 1, scale: 1 })
			}
		},
	})

	const { t } = useTranslation()
	return (
		<>
			<div className={s.aboutMe}>
				<div className={s.about}>
					<section className={s.container}>
						<div id='about__mq' className={s.about__wrapper}>
							<animated.div
								style={{
									backdropFilter: 'blur(2.5px) hue-rotate(145deg)',
									background: '#fd853a13',
									display: 'flex',
									alignItems: 'flex-end',
									borderRadius: '20px',
									...springs,
								}}
							>
								<img className={s.my__picture} src={myPicture} alt='#' />
							</animated.div>

							<animated.div
								style={{
									maxWidth: '35rem',
									width: '100%',
									display: 'flex',
									flexFlow: 'wrap column',
									backdropFilter: 'blur(2.5px) hue-rotate(145deg)',
									background: '#fd853a13',
									borderRadius: '20px',
									padding: '2rem 2.5rem',
									...article,
								}}
							>
								<h5>
									{t('Hello, my full name is')}
									<span>{t(' Fazilyanov Artur')}</span>
								</h5>
								<p>
									{t('I’m a self-taught front-end developer based in')}
									<strong> {t('Ferghana')}</strong>,{' '}
									<strong>{t('Uzbekistan')}</strong>.{' '}
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
								<div className={s.about__socials}>
									<a href='https://github.com/Arthur1590' target='_blank'>
										<img src={github} alt='github' />
									</a>
									<a href='https://t.me/yep_its_me_01' target='_blank'>
										<img src={telegram} alt='telegram' />
									</a>
									<img src={instagram} alt='instagram' />
								</div>
							</animated.div>
						</div>
					</section>
				</div>
				<div className={s.skills}>
					<section className={s.container}>
						<h5 className={s.section__title}>About my skillset {'/>'}</h5>

						<div className={s.skills__wrapper}>
							<animated.div
								ref={refGrid}
								style={{
									display: 'grid',
									gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
									gridAutoRows: 'auto',
									gap: '1rem',
									placeItems: 'center',
									...grid,
								}}
							>
								<SkillsCard />
							</animated.div>
						</div>
					</section>
				</div>
			</div>
		</>
	)
}

export default About
