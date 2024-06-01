import { FC } from 'react'
import s from '../../pages/pages.module.scss'
import { Link } from 'react-router-dom'
import prj from './img/currentPortfolio.png'
import { useTranslation } from 'react-i18next'

interface Repo {
	id: number
	name: string
	html_url: string
	homepage: string
	image?: string
	created_at: string
	description: string
}

interface CardProps {
	card: Repo
}

const RepoCard: FC<CardProps> = ({ card }) => {
	const { t } = useTranslation()

	return (
		<>
			<div className={s.projects__card}>
				<div className={s.projects__card_el}>
					<h3>{card.name}</h3>
					<img src={card.image || prj} alt={`${card.name} Repo Image`} />
					<div>
						<Link
							to={`/projects/${card.id}`}
							rel='noopener noreferrer'
							className={s.projects__card_link}
						>
							{t('Learn More')}
						</Link>
						<a
							href={card.homepage}
							target='_blank'
							rel='noopener noreferrer'
							className={s.projects__card_link}
						>
							{t('Live')}
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default RepoCard
