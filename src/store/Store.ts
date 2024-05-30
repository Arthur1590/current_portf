import { create } from 'zustand'
import axios from 'axios'

// ? fetch data from github
interface Repo {
	id: number
	name: string
	html_url: string
	homepage: string
	image: string
	created_at: string
	language: string
}

interface ReposState {
	repos: Repo[]
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
	error: string | null
	fetchRepos: () => void
}

export const useReposStore = create<ReposState>(set => ({
	repos: [],
	status: 'idle',
	error: null,
	fetchRepos: async () => {
		set({ status: 'loading' })
		try {
			const response = await axios.get(
				'https://api.github.com/users/Arthur1590/repos'
			)
			set({ repos: response.data, status: 'succeeded' })
		} catch (err) {
			let errorMessage = 'An unknown error occurred'
			if (err instanceof Error) {
				errorMessage = err.message
			}
			set({ error: errorMessage, status: 'failed' })
		}
	},
}))

// ?

// ? theme
