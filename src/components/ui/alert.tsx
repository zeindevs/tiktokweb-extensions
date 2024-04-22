import { cn } from '@/utils'
import React from 'react'

type Props = {
	variant: 'danger'
	className?: string
}

const variants = {
	danger: 'p-2 text-xs text-sm text-red-500 rounded-md bg-red-500/20 border border-red-500/50 text-center',
}

const Alert: React.FC<React.PropsWithChildren<Props>> = ({ children, variant, className }) => {
	return (
		<div className={cn(variants[variant], className)} role="alert">
			{children}
		</div>
	)
}

export default Alert
