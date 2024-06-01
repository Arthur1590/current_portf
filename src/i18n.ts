import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

i18n
	.use(Backend)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		lng: 'en', // язык по умолчанию
		backend: {
			loadPath: '/current_portf/locales/{{lng}}/{{ns}}.json', // путь к файлам локализации
		},
		react: {
			useSuspense: true, // использование Suspense
		},
	})

export default i18n
