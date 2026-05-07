import { render, screen } from '../test-utils';
import Navbar from './Navbar';
import { expect, test } from 'vitest';

test('renders Navbar with title', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/Recipes Board/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Create Recipe link', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/Create Recipe/i);
  expect(linkElement).toBeInTheDocument();
});
