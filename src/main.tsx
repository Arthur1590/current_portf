import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Loader from './utils/loader/Loader'
import './scss/main.scss'
import { HashRouter } from 'react-router-dom'
import './i18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<HashRouter>
			<Suspense fallback={<Loader />}>
				<App />
			</Suspense>
		</HashRouter>
	</React.StrictMode>
)
