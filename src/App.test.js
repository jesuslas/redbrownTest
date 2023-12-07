import { render, screen } from '@testing-library/react';
import App from './App';

test('renders   Hola redbrow test Hello', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hola redbrow test/i);
  expect(linkElement).toBeInTheDocument();
});
