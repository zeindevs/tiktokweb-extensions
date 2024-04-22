import React, { SelectHTMLAttributes } from 'react'

type Option =  {
  value: string
  label: string
}

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  options?: Option[]
}

const Select: React.FC<Props> = (props) => {
  return (
    <select
      {...props}
      className="text-xs bg-zinc-700 border border-zinc-600 text-white text-sm outline-none rounded-md focus:border-zinc-500 py-1 px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-zinc-500"
    >
      <option>Facebook Reels</option>
      <option>Instagram Reels</option>
      <option>Youtube Short</option>
    </select>
  )
}

export default Select
