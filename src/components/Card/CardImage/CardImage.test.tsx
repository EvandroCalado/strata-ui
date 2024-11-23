import { render, screen } from '@testing-library/react';
import { CardImage } from '.';

describe('<CardImage />', () => {
  it('should render a CardImage by default', () => {
    render(<CardImage src="test.png" />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'test.png');
  });

  it('should render a snapshot', () => {
    const { container } = render(<CardImage src="test.png" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
