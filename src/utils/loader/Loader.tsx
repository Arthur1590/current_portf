import React from 'react'
import './loader.scss'

const Loader = () => {
	return (
		<div className='wrapper'>
			<div className='loop cubes'>
				<div className='item cubes'></div>
				<div className='item cubes'></div>
				<div className='item cubes'></div>
				<div className='item cubes'></div>
				<div className='item cubes'></div>
				<div className='item cubes'></div>
			</div>
		</div>
	)
}

export default Loader
