import { FC } from 'react'
import s from './pages.module.scss'

const Contacts: FC = () => {
	const reloaderhandler = () => {
		window.location.reload()
	}

	return (
		<div className={s.contacts__holder}>
			<div className={s.container}>
				<div id='contacts__wrapper' className={s.form__wrapper}>
					<div id='contacts__inputs' className={s.input}>
						<h1 className={s.section__title}>
							Write me here <span>↓</span>
						</h1>
						<input required type='email' placeholder='Your email' autoFocus />
					</div>
					<textarea
						placeholder='Send me your message...'
						cols={50}
						rows={10}
					></textarea>
					<button onClick={() => reloaderhandler()}>Send</button>
				</div>
			</div>
		</div>
	)
}

export default Contacts
