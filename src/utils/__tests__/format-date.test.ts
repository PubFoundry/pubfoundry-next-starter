import { formatDate } from '@/utils/format-date'

describe('formatDate', () => {
  it('formats a regular date correctly', () => {
    const date = new Date('2024-03-15')
    expect(formatDate(date)).toBe('2024-03-15')
  })

  it('adds leading zeros to single-digit months and days', () => {
    const date = new Date('2024-01-05')
    expect(formatDate(date)).toBe('2024-01-05')
  })

  it('handles end of year dates correctly', () => {
    const date = new Date('2024-12-31')
    expect(formatDate(date)).toBe('2024-12-31')
  })
})
