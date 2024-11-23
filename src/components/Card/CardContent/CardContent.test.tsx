import { render } from '@testing-library/react';
import { CardContent } from '.';

describe('<CardContent />', () => {
  it('should render a snapshot', () => {
    const { container } = render(<CardContent />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
