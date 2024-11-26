import { render, screen } from '@testing-library/react';
import { CardTitle } from '.';

describe('<CardTitle />', () => {
  it('should render a CardTitle without icon', () => {
    render(<CardTitle>valid name</CardTitle>);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/valid name/i)).toBeInTheDocument();
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = render(<CardTitle icon>valid name</CardTitle>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
