import { FC, useEffect, useRef } from 'react'
import webGLFluidEnhanced from 'webgl-fluid-enhanced'
import s from './Fluid.module.scss'
import { useTranslation } from 'react-i18next'

// const lqConfig = {
// 	SIM_RESOLUTION: 128, // Уменьшенное разрешение сетки симуляции для улучшенной производительности
// 	DYE_RESOLUTION: 256, // Уменьшенное разрешение сетки красителя для улучшенной производительности
// 	CAPTURE_RESOLUTION: 256, // Уменьшенное разрешение для захвата кадров
// 	DENSITY_DISSIPATION: 0.98, // Немного уменьшенная диссипация плотности для более плавного визуального эффекта
// 	VELOCITY_DISSIPATION: 0.2, // Оставлено без изменений для хорошей плавности движения
// 	PRESSURE: 0.8, // Оставлено без изменений, так как это оптимальное значение для давления
// 	PRESSURE_ITERATIONS: 15, // Уменьшенное количество итераций для повышения производительности
// 	CURL: 15, // Умеренное значение завихрения для менее агрессивного визуального эффекта
// 	INITIAL: true, // Оставлено без изменений для начального эффекта
// 	SPLAT_AMOUNT: 3, // Умеренное количество начальных брызг для более чистого старта
// 	SPLAT_RADIUS: 0.2, // Уменьшенный радиус брызг для более детализированных начальных эффектов
// 	SPLAT_FORCE: 4000, // Умеренная сила брызг для более естественного движения
// 	SPLAT_KEY: 'Space', // Оставлено без изменений для удобства взаимодействия
// 	SHADING: true, // Оставлено без изменений для реалистичного освещения
// 	COLORFUL: true, // Оставлено без изменений для динамичной цветовой палитры
// 	COLOR_UPDATE_SPEED: 8, // Немного уменьшенная скорость обновления цветов для более плавных переходов
// 	COLOR_PALETTE: [], // Оставлено пустым для использования встроенных цветов
// 	HOVER: true, // Оставлено без изменений для интерактивности
// 	BACK_COLOR: '#000000', // Оставлено без изменений для контрастного фона
// 	TRANSPARENT: false, // Оставлено без изменений для непрозрачного фона
// 	BRIGHTNESS: 0.5, // Умеренная яркость для хорошей визуальной четкости
// 	BLOOM: false, // Отключено для улучшения производительности
// 	BLOOM_ITERATIONS: 5, // Уменьшенное количество итераций свечения для улучшенной производительности
// 	BLOOM_RESOLUTION: 128, // Уменьшенное разрешение для свечения
// 	BLOOM_INTENSITY: 0.6, // Умеренная интенсивность свечения для более естественного эффекта
// 	BLOOM_THRESHOLD: 0.5, // Уменьшенный порог свечения для более тонкого эффекта
// 	BLOOM_SOFT_KNEE: 0.5, // Немного уменьшенное значение мягкости для более четких световых эффектов
// 	SUNRAYS: false, // Отключено для улучшения производительности
// 	SUNRAYS_RESOLUTION: 128, // Уменьшенное разрешение для солнечных лучей
// 	SUNRAYS_WEIGHT: 0.8, // Уменьшенный вес для более тонкого эффекта солнечных лучей
// }

const FluidEnhanced: FC = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const { t } = useTranslation()

	useEffect(() => {
		if (canvasRef.current) {
			webGLFluidEnhanced.simulation(canvasRef.current, {
				SIM_RESOLUTION: 128, // Повышенная разрешение сетки симуляции для более детализированного отображения
				DYE_RESOLUTION: 512, // Умеренное разрешение сетки красителя для баланса между качеством и производительностью
				CAPTURE_RESOLUTION: 512, // Оставлено без изменений, так как это оптимальное значение для захвата кадров
				DENSITY_DISSIPATION: 0.98, // Немного уменьшенная диссипация плотности для более плавного визуального эффекта
				VELOCITY_DISSIPATION: 0.25, // Чуть более медленное рассеивание скорости для большей плавности движения
				PRESSURE: 0.8, // Оставлено без изменений, так как это оптимальное значение для давления
				PRESSURE_ITERATIONS: 20, // Оставлено без изменений для хорошего баланса точности и производительности
				CURL: 30, // Умеренное значение завихрения для менее агрессивного визуального эффекта
				INITIAL: true, // Оставлено без изменений для начального эффекта
				SPLAT_AMOUNT: 4, // Умеренное количество начальных брызг для более чистого старта
				SPLAT_RADIUS: 0.2, // Уменьшенный радиус брызг для более детализированных начальных эффектов
				SPLAT_FORCE: 5000, // Умеренная сила брызг для более естественного движения
				SPLAT_KEY: 'Enter', // Оставлено без изменений для удобства взаимодействия
				SHADING: false, // Оставлено без изменений для реалистичного освещения
				COLORFUL: true, // Оставлено без изменений для динамичной цветовой палитры
				COLOR_UPDATE_SPEED: 8, // Немного уменьшенная скорость обновления цветов для более плавных переходов
				COLOR_PALETTE: [], // Оставлено пустым для использования встроенных цветов
				HOVER: true, // Оставлено без изменений для интерактивности
				BACK_COLOR: '#000000', // Оставлено без изменений для контрастного фона
				TRANSPARENT: false, // Оставлено без изменений для непрозрачного фона
				BRIGHTNESS: 0.6, // Немного увеличенная яркость для более насыщенных цветов
				BLOOM: true, // Оставлено без изменений для эффекта свечения
				BLOOM_ITERATIONS: 3, // Уменьшенное количество итераций для улучшенной производительности
				BLOOM_RESOLUTION: 256, // Оставлено без изменений для хорошего баланса качества и производительности
				BLOOM_INTENSITY: 0.7, // Умеренная интенсивность свечения для более естественного эффекта
				BLOOM_THRESHOLD: 0.5, // Уменьшенный порог свечения для более тонкого эффекта
				BLOOM_SOFT_KNEE: 0.6, // Немного уменьшенное значение мягкости для более четких световых эффектов
				SUNRAYS: true, // Оставлено без изменений для эффекта солнечных лучей
				SUNRAYS_RESOLUTION: 256, // Увеличенная разрешение для более детализированных солнечных лучей
				SUNRAYS_WEIGHT: 1.0,
			})
		}
	}, [])

	return (
		<>
			<div className={s.fluid_animation}>
				<canvas ref={canvasRef} style={{ width: '100%', height: '100vh' }} />
				<div className={s.fluid_intro}>
					<div className={s.container}>
						<article>
							<p>{t("Hi, I'm")} </p>
							<h1>{t('Artur')}|</h1>
							<h4>
								{'<'}Web Developer{'>'}
							</h4>
						</article>
					</div>
				</div>
			</div>
		</>
	)
}

export default FluidEnhanced
