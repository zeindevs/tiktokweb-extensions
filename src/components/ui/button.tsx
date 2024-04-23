import React, { ButtonHTMLAttributes } from 'react'

import { cn } from '@/utils'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className={cn(
				`text-xs text-white bg-zinc-700 hover:bg-zinc-800 active:bg-zinc-800/50 border border-zinc-600 font-medium rounded text-sm px-3 py-1.5`,
				props.className,
			)}
		>
			{children}
		</button>
	)
}

export const ButtonIcon: React.FC<React.PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className={cn(
				'p-1 rounded hover:bg-zinc-700 text-zinc-300 hover:text-white active:bg-zinc-700/50 border border-transparent hover:border-zinc-600',
				props.className,
			)}
		>
			{children}
		</button>
	)
}
