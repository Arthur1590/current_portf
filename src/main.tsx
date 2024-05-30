import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Loader from './utils/loader/Loader'
import './scss/main.scss'
import './i18n'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Suspense fallback={<Loader />}>
			<HashRouter>
				<App />
			</HashRouter>
		</Suspense>
	</React.StrictMode>
)
