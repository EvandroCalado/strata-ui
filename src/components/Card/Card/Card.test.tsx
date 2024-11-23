import { render } from '@testing-library/react';
import { Card } from '.';

describe('<Card />', () => {
  it('should render a snapshot', () => {
    const { container } = render(<Card />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
