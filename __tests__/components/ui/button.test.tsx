import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders with default variant', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-primary')
  })

  it('renders with outline variant', () => {
    render(<Button variant="outline">Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('border-input')
  })

  it('renders with secondary variant', () => {
    render(<Button variant="secondary">Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-secondary')
  })

  it('renders with destructive variant', () => {
    render(<Button variant="destructive">Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-destructive')
  })

  it('renders with ghost variant', () => {
    render(<Button variant="ghost">Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('hover:bg-accent')
  })

  it('renders with link variant', () => {
    render(<Button variant="link">Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('text-primary')
  })

  it('renders with correct size', () => {
    render(<Button size="lg">Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('h-11')
  })

  it('renders with icon', () => {
    render(
      <Button>
        <span>Click me</span>
      </Button>
    )
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })
})