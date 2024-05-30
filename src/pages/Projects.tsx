import { FC, useEffect } from 'react'
import { useReposStore } from '../store/Store'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import s from './pages.module.scss'
import repoImages from '../store/ReposImg'
import Loader from '../utils/loader/Loader'
import Page404 from './Page404'

const RepoList: FC = () => {
	const { repos, status, fetchRepos } = useReposStore()

	useEffect(() => {
		fetchRepos()
	}, [fetchRepos])

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
				<div className={s.projects__wrapper}>
					{repos.map(repo => (
						<ProjectCard
							key={repo.id}
							card={{ ...repo, image: repoImages[repo.id] }}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default RepoList
