import { render } from '@testing-library/react';
import { CardDescription } from '.';

describe('<CardDescription />', () => {
  it('should render a snapshot', () => {
    const { container } = render(<CardDescription />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
