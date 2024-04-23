import React, { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputProps> = (props) => {
	return (
		<input
			{...props}
			className="bg-zinc-900 border border-zinc-700 text-xs text-zinc-300 text-sm rounded outline-none focus:border-zinc-600 block w-full py-1.5 px-3"
		/>
	)
}
