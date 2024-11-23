import { render, screen } from '@testing-library/react';
import { Badge } from '.';

describe('<Badge />', () => {
  it('should render a Badge by default', () => {
    render(<Badge>badge</Badge>);

    expect(screen.getByText('badge')).toBeInTheDocument();
    expect(screen.getByText('badge')).toHaveClass(
      'bg-primary-900 text-primary-100 hover:bg-primary-800 dark:bg-primary-100 dark:text-primary-900 dark:hover:bg-primary-200',
    );
  });

  it('should render a Badge variants', () => {
    const { rerender } = render(<Badge variant="secondary">badge</Badge>);

    expect(screen.getByText('badge')).toHaveClass('bg-primary-200');

    rerender(<Badge variant="destructive">badge</Badge>);

    expect(screen.getByText('badge')).toHaveClass('bg-red-500');

    rerender(<Badge variant="outline">badge</Badge>);

    expect(screen.getByText('badge')).toHaveClass('bg-transparent');

    rerender(<Badge variant="ghost">badge</Badge>);

    expect(screen.getByText('badge')).toHaveClass(
      'bg-transparent hover:bg-primary-200',
    );
  });

  it('should render all something on click', () => {
    const onClick = vi.fn();

    render(<Badge onClick={onClick}>badge</Badge>);

    const badge = screen.getByText('badge');

    badge.click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render a snapshot', () => {
    const { container } = render(<Badge>badge</Badge>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
