import Link from 'next/link'
import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ButtonProps
  extends Partial<
    DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  > {
  href: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const ButtonLink = ({
  href,
  size,
  children,
  className,
  ...rest
}: ButtonProps) => {
  // derive padding from button size prop
  const buttonSize =
    size === 'md'
      ? 'px-2.5 py-1.5'
      : size === 'sm'
        ? 'px-2 py-1'
        : 'px-3.5 py-2.5'

  return (
    <Link
      className={twMerge(
        'rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
        buttonSize,
        className,
      )}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default ButtonLink
