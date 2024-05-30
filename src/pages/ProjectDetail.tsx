import { FC } from 'react'
import s from './pages.module.scss'
import { useParams } from 'react-router'
import { useReposStore } from '../store/Store'
import prj from '../components/ProjectCard/img/porfolio.jpg'
import { Link } from 'react-router-dom'

const ProjectDetail: FC = () => {
	const { id } = useParams<{ id: string }>()
	const { repos } = useReposStore()
	const repo = repos.find(repo => repo.id === Number(id))

	if (!repo) {
		return <div className={s.repo__error}>Repository not found</div>
	}

	return (
		<>
			<div className={s.projects__id}>
				<div className={s.container}>
					<div className={s.projects__id_item}>
						<p>
							<span>
								<h5>Title:</h5> {repo.name}
							</span>
							<Link to='/projects'>Get Back</Link>
						</p>
						<img src={repo.image || prj} alt={repo.name} />
						<article>
							<p>
								Was created: <span> {repo.created_at}</span>
							</p>
							<p>
								Language: <span> {repo.language || 'Undetected'}</span>
							</p>
							<a target='_blank' rel='noopener noreferrer' href={repo.html_url}>
								Visit repository
							</a>
						</article>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProjectDetail
