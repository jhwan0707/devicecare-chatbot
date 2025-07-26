import { render, screen } from '@testing-library/react';
import App from './App';

test('renders message input', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /send/i });
  expect(buttonElement).toBeInTheDocument();
});
