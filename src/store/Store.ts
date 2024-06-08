import { create } from 'zustand'
import axios from 'axios'

// ? fetch data from github
interface Repo {
	id: number
	name: string
	html_url: string
	homepage: string
	description: string
	image?: string
	created_at: string
	language: string
	Imgid: string
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
interface ThemeState {
	theme: 'Light' | 'Dark'
	toggleTheme: () => void
	initTheme: () => void
}

export const useThemeStore = create<ThemeState>(set => ({
	theme: 'Light',
	toggleTheme: () =>
		set(state => {
			const newTheme = state.theme === 'Light' ? 'Dark' : 'Light'
			document.body.classList.remove(state.theme)
			document.body.classList.add(newTheme)
			localStorage.setItem('theme', newTheme)
			return { theme: newTheme }
		}),
	initTheme: () =>
		set(state => {
			const storedTheme = localStorage.getItem('theme') as
				| 'Light'
				| 'Dark'
				| null
			const theme = storedTheme || state.theme
			document.body.classList.add(theme)
			return { theme }
		}),
}))
