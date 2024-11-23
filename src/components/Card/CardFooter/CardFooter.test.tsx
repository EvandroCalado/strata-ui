import { render } from '@testing-library/react';
import { CardFooter } from '.';

describe('<CardFooter />', () => {
  it('should render a snapshot', () => {
    const { container } = render(<CardFooter />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
