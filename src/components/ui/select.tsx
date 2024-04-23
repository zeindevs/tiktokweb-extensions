import React, { SelectHTMLAttributes } from 'react'

type Option =  {
  value: string
  label: string
}

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  options?: Option[]
}

export const Select: React.FC<Props> = (props) => {
  return (
    <select
      {...props}
      className="text-xs bg-zinc-700 hover:bg-zinc-800 border border-zinc-600 focus:border-zinc-500 active:border-zinc-500 text-white text-sm outline-none rounded py-1 px-2"
    >
      <option>Facebook Reels</option>
      <option>Instagram Reels</option>
      <option>Youtube Short</option>
    </select>
  )
}
