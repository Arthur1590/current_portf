import { FC, useEffect } from 'react'
import { useReposStore } from '../store/Store'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import repoImages from '../store/ReposImg'
import Loader from '../utils/loader/Loader'
import Page404 from './Page404'
import s from './pages.module.scss'

const RepoList: FC = () => {
	const { repos, status, fetchRepos, setCurrentRepo, currentRepo } =
		useReposStore()

	useEffect(() => {
		fetchRepos()
	}, [fetchRepos])

	useEffect(() => {
		if (!currentRepo && repos.length > 0) {
			setCurrentRepo(repos[0])
		}
	}, [repos, currentRepo, setCurrentRepo])

	if (status === 'loading') {
		return <Loader />
	}

	if (status === 'failed') {
		return <Page404 />
	}

	return (
		<div className={s.projects}>
			<div className={s.container}>
				<h1 className={s.section__title}>My small projects{'~~>'}</h1>

				<div className={s.tabs__content}>
					<div className={s.tabs__content_tab}>
						{repos &&
							repos.map(repo => (
								<button
									key={repo.id}
									onClick={() => setCurrentRepo(repo)}
									className={currentRepo?.id === repo.id ? `${s.active}` : ''}
								>
									{repo.name}
								</button>
							))}
					</div>
					{currentRepo && (
						<div className={s.tabs__current}>
							<ProjectCard
								key={currentRepo.id}
								card={{ ...currentRepo, image: repoImages[currentRepo.id] }}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default RepoList
