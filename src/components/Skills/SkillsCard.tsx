import { FC } from 'react'
import { data } from './skillsData'
import s from '../../pages/pages.module.scss'

const SkillsCard: FC = () => {
	return (
		<>
			{data.map((card, i) => (
				<div key={card.title} className={s.skills__card}>
					<h5>{card.title}</h5>
					<img src={card.img} alt={card.title} />
				</div>
			))}
		</>
	)
}

export default SkillsCard
