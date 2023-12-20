const Button = ({ type, text, bgColor, color, fontSize, width, height }) => {
	return (
		<div className='flex justify-center'>
			<button
				className={`rounded-md opacity-90 hover:opacity-100 ${height} ${width} ${fontSize} ${color} ${bgColor} mx-auto my-3`}
			>
				{text}
			</button>
		</div>
	)
}

Button.defaultProps = {
	type: 'button',
	text: 'Submit',
	bgColor: 'bg-red-500',
	color: 'text-white',
	fontSize: 'text-[1.1rem]',
	width: 'w-[12rem]',
	height: 'h-[2.4rem]',
}

export default Button
