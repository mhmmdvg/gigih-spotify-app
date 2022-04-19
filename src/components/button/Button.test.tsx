import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button and test onClick', () => {
  render(<Button onClick={() => {}}>Test</Button>);

  const click = screen.getByTestId('click-test');
  fireEvent.click(click);
});
