import { FC } from 'react'
import s from './Intro.module.scss'
import myPhoto from './img/MyPhoto.png'
import { Link } from 'react-router-dom'
import { RoutePaths } from '../../types/router'

const Intro: FC = () => {
	return (
		<>
			<div className={s.intro}>
				<div className={s.container}>
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
							Hi, I am a <span>web designer</span> and
							<span> front-end developer</span>
						</h5>
						<p>
							I craft responsive websites where technologies meet creativity
						</p>
						<div className={s.intro__socials}>
							<Link to={RoutePaths.CONTACTS}>
								<button>
									{'< '}Contact me{' />'}
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
