import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Phoenix React App link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Phoenix React App/i);
  expect(linkElement).toBeInTheDocument();
});
