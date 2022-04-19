import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Track from './Track';

test('should render Track component', () => {
  render(
    <Track
      images="https://i.scdn.co/image/ab67616d0000b273f8b9d8f8b8c8f9c9d8f8b9d8f"
      title="The Beatles"
      artist="Beatles"
      albumName="Abbey Road"
      onClick={() => {}}
    >
      Test
    </Track>
  );

  const clickButton = screen.getByTestId('click-test');
  fireEvent.click(clickButton);
  expect(clickButton).toBeTruthy();
});
