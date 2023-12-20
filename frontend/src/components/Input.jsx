import React from 'react'
import InputContainer from './InputContainer'

function Input({ label, type, value, onChange, onBlur, name, error }) {
	function getErrMsg() {
		if (!error) return
		return error[0]
	}

	return (
		<InputContainer label={label}>
			<input
				id={label}
				type={type}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				name={name}
				className='rounded-lg
          border border-1 border-[#e0e0e0] outline-none bg-white transition-all duration-150 ease-linear text-[1.1rem] w-full placeholder:text-[.9rem] px-2 py-1'
				placeholder={name + ' .....'}
			/>
			{error && (
				<div className='text-[.9rem] text-red-500'>{getErrMsg()}</div>
			)}
		</InputContainer>
	)
}

export default Input
