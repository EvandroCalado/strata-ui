import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
  it('should render a button by default', () => {
    render(<Button>button</Button>);

    const button = screen.getByRole('button', { name: /button/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'bg-primary-500 text-white hover:bg-primary-600',
      'text-base px-4 py-2',
    );
  });

  it('should render button variants', () => {
    const { rerender } = render(<Button variant="secondary" />);

    const button = screen.getByRole('button');

    expect(button).toHaveClass(
      'bg-primary-100 text-gray-800 hover:bg-primary-200',
    );

    rerender(<Button variant="destructive" />);

    expect(button).toHaveClass(
      'bg-destructive-500 text-white hover:bg-destructive-600',
    );

    rerender(<Button variant="outline" />);

    expect(button).toHaveClass(
      'text-primary-600 border-[1px] border-primary-600 bg-transparent hover:bg-primary-100',
    );

    rerender(<Button variant="ghost" />);

    expect(button).toHaveClass(
      'text-primary-600 bg-transparent hover:bg-primary-100',
    );

    rerender(<Button variant="link" />);

    expect(button).toHaveClass(
      'text-primary-600 bg-transparent hover:underline hover:underline-offset-4',
    );
  });

  it('should render button sizes', () => {
    const { rerender } = render(<Button size="sm" />);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('text-sm px-4 py-2');

    rerender(<Button size="md" />);

    expect(button).toHaveClass('text-base px-4 py-2');

    rerender(<Button size="lg" />);

    expect(button).toHaveClass('text-lg px-6 py-3');
  });

  it('should render button with isLoading state', () => {
    render(<Button isLoading />);

    const button = screen.getByRole('button');
    const spinner = screen.getByRole('button').firstChild;

    expect(button).toBeDisabled();
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass(
      'h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent',
    );
  });

  it('should render button with disabled state', () => {
    render(<Button disabled />);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('should ensure button called onClick when is passed', () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick} />);

    const button = screen.getByRole('button');

    button.click();

    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const onClick = vi.fn();

    const { container } = render(<Button onClick={onClick} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});