import React from 'react'

import { cn } from '@/utils'

type Props = {
	variant: 'danger' | 'info' | 'warning' | 'success'
	className?: string
}

const variants = {
	info: 'px-2 py-3 text-xs text-sm text-blue-400 rounded bg-blue-500/20 border border-blue-500/50 text-center',
	success: 'px-2 py-3 text-xs text-sm text-green-400 rounded bg-green-500/20 border border-green-500/50 text-center',
	warning: 'px-2 py-3 text-xs text-sm text-yellow-400 rounded bg-yellow-500/20 border border-yellow-500/50 text-center',
	danger: 'px-2 py-3 text-xs text-sm text-red-400 rounded bg-red-500/20 border border-red-500/50 text-center',
}

const Alert: React.FC<React.PropsWithChildren<Props>> = ({ children, variant, className }) => {
	return (
		<div className={cn(variants[variant], className)} role="alert">
			{children}
		</div>
	)
}

export default Alert
