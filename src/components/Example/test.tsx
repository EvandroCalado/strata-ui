import { render, screen } from '@testing-library/react';
import { Example } from '.';

describe('Example', () => {
  it('should render', () => {
    render(<Example />);

    expect(
      screen.getByRole('heading', { name: 'Example', level: 1 }),
    ).toBeDefined();
  });
});
