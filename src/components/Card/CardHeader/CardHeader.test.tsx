import { render } from '@testing-library/react';
import { CardHeader } from '.';

describe('<CardHeader />', () => {
  it('should render a snapshot', () => {
    const { container } = render(<CardHeader />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
