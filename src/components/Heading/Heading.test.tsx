import { render, screen } from '@testing-library/react';
import { Heading } from '.';

describe('Heading', () => {
  it('should render a heading by default', () => {
    render(<Heading>heading</Heading>);

    const heading = screen.getByRole('heading', { name: /heading/i, level: 2 });

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H2');
    expect(heading).toHaveClass(
      'scroll-m-20 text-3xl tracking-tight lg:text-4xl font-normal text-left',
    );
  });

  it('should render a heading with a custom tag', () => {
    const { rerender } = render(<Heading as="h1">heading</Heading>);

    expect(screen.getByRole('heading').tagName).toBe('H1');
    expect(screen.getByRole('heading')).toHaveClass(
      'text-4xl lg:text-5xl font-normal text-left',
    );

    rerender(<Heading as="h3">heading</Heading>);

    expect(screen.getByRole('heading').tagName).toBe('H3');

    rerender(<Heading as="h4">heading</Heading>);

    expect(screen.getByRole('heading').tagName).toBe('H4');

    rerender(<Heading as="h5">heading</Heading>);

    expect(screen.getByRole('heading').tagName).toBe('H5');

    rerender(<Heading as="h6">heading</Heading>);

    expect(screen.getByRole('heading').tagName).toBe('H6');
  });

  it('should render a heading with a custom weight', () => {
    const { rerender } = render(<Heading weight="thin">heading</Heading>);

    expect(screen.getByRole('heading')).toHaveClass('font-thin');

    rerender(<Heading weight="medium">heading</Heading>);

    expect(screen.getByRole('heading')).toHaveClass('font-medium');

    rerender(<Heading weight="semibold">heading</Heading>);

    expect(screen.getByRole('heading')).toHaveClass('font-semibold');

    rerender(<Heading weight="bold">heading</Heading>);

    expect(screen.getByRole('heading')).toHaveClass('font-bold');

    rerender(<Heading weight="extrabold">heading</Heading>);

    expect(screen.getByRole('heading')).toHaveClass('font-extrabold');

    rerender(<Heading weight="black">heading</Heading>);

    expect(screen.getByRole('heading')).toHaveClass('font-black');
  });

  it('should render a heading with a custom align', () => {
    const { rerender } = render(<Heading align={'center'}>heading</Heading>);

    expect(screen.getByRole('heading')).toHaveClass('text-center');

    rerender(<Heading align={'right'}>heading</Heading>);

    expect(screen.getByRole('heading')).toHaveClass('text-right');
  });

  it('should render a heading with a custom class', () => {
    render(<Heading className="underline">heading</Heading>);

    expect(screen.getByRole('heading')).toHaveClass('underline');
  });

  it('should render a snapshot', () => {
    const { container } = render(
      <Heading className="underline">heading</Heading>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
