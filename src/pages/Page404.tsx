import { FC } from 'react'
import s from './pages.module.scss'
import { useReposStore } from '../store/Store'

const Page404: FC = () => {
	const { error } = useReposStore()

	return <h1 className={s.error}>{error}</h1>
}

export default Page404
