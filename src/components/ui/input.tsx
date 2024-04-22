import React, { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputProps> = (props) => {
	return (
		<input
			{...props}
			className="bg-zinc-900 border border-zinc-700 text-xs text-zinc-300 text-sm rounded-md outline-none focus:ring-zinc-500 focus:border-zinc-500 block w-full py-1.5 px-3 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500"
		/>
	)
}
