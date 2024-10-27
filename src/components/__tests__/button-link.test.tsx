// src/components/__tests__/ButtonLink.test.tsx
import { render, screen } from '@testing-library/react'

import ButtonLink from '@/components/button-link'

// Mock next/link as it's not available in the test environment
jest.mock('next/link', () => {
  // eslint-disable-next-line react/display-name
  return ({ children, className, href, ...rest }: any) => {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    )
  }
})

describe('ButtonLink', () => {
  it('renders with default styling and correct href', () => {
    render(<ButtonLink href="/test">Click me</ButtonLink>)

    const link = screen.getByText('Click me')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
    expect(link).toHaveClass('bg-indigo-600', 'text-white', 'rounded-md')
  })

  it('applies correct padding based on size prop', () => {
    const { rerender } = render(
      <ButtonLink href="/test" size="sm">
        Small
      </ButtonLink>,
    )
    expect(screen.getByText('Small')).toHaveClass('px-2', 'py-1')

    rerender(
      <ButtonLink href="/test" size="md">
        Medium
      </ButtonLink>,
    )
    expect(screen.getByText('Medium')).toHaveClass('px-2.5', 'py-1.5')

    rerender(
      <ButtonLink href="/test" size="lg">
        Large
      </ButtonLink>,
    )
    expect(screen.getByText('Large')).toHaveClass('px-3.5', 'py-2.5')
  })

  it('merges custom className with default classes', () => {
    render(
      <ButtonLink href="/test" className="custom-class">
        Custom
      </ButtonLink>,
    )

    const link = screen.getByText('Custom')
    expect(link).toHaveClass('custom-class')
    expect(link).toHaveClass('bg-indigo-600') // Should still have default classes
  })

  it('passes through additional props to Link component', () => {
    render(
      <ButtonLink href="/test" target="_blank" rel="noopener noreferrer">
        External
      </ButtonLink>,
    )

    const link = screen.getByText('External')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
