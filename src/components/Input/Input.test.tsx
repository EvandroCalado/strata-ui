import { render, screen } from '@testing-library/react';
import { Input } from '.';

describe('Input', () => {
  it('should render an input by default', () => {
    render(<Input placeholder="placeholder" />);

    const input = screen.getByRole('textbox');
    const span = screen.getByRole('textbox').nextElementSibling;

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'placeholder');
    expect(span).not.toBeInTheDocument();
  });

  it('should render an input with error', () => {
    render(<Input placeholder="placeholder" errorMessage="a error" />);

    const span = screen.getByRole('textbox').nextElementSibling;

    expect(span).toBeInTheDocument();
    expect(span).toHaveTextContent('a error');
  });

  it('should render an input disabled', () => {
    render(<Input disabled />);

    const input = screen.getByRole('textbox');

    expect(input).toBeDisabled();
  });

  it('should render a snapshot', () => {
    const { container } = render(<Input disabled />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
