import React from 'react'

const InputContainer = ({ label, bgColorClass, children }) => {
	return (
		<div className={`${bgColorClass}  pt-1  p-2`}>
			<label
				className='capitalize inline-block  text-[#5f5f5f] text-[1rem]'
				htmlFor={label}
			>
				{label}
			</label>
			<div className='flex flex-col'>{children}</div>
		</div>
	)
}

export default InputContainer
