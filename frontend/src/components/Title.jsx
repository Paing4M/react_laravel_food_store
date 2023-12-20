import React from 'react'

const Title = ({ title, margin }) => {
	return <h1 className={`text-xl font-bold ${margin}`}>{title}</h1>
}

export default Title
