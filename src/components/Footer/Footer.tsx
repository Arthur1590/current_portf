import { FC } from 'react'
import s from './footer.module.scss'

const Footer: FC = () => {
	return (
		<>
			<footer id='footer__mq' className={s.footer}>
				<div className={s.wrapper}>
					<h5>Designed and Coded by Artur</h5>
					<h1>PORTFOLIO</h1>
				</div>
			</footer>
		</>
	)
}

export default Footer
