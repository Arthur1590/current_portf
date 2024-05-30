import { FC } from 'react'
import s from '../../pages/pages.module.scss'
import prj from '../../components/ProjectCard/img/porfolio.jpg'
import { Link } from 'react-router-dom'

interface Repo {
	id: number
	name: string
	html_url: string
	homepage: string
	image: string
}

interface CardProps {
	card: Repo
}

const RepoCard: FC<CardProps> = ({ card }) => {
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
							Learn More
						</Link>
						<a
							href={card.homepage}
							target='_blank'
							rel='noopener noreferrer'
							className={s.projects__card_link}
						>
							Live
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default RepoCard
