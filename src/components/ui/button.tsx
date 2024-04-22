import { cn } from '@/utils'
import React, { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className={cn(`text-xs text-white bg-zinc-700 hover:bg-zinc-800 border border-gray-600 font-medium rounded-md text-sm px-3 py-1.5 dark:bg-zinc-600 dark:hover:bg-zinc-700 focus:outline-none active:bg-zinc-700/80`, props.className)}
		>
			{children}
		</button>
	)
}
