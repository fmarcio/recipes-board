import { render, screen, fireEvent } from '../test-utils';
import ThemeSelector from './ThemeSelector';
import { expect, test } from 'vitest';

test('renders theme color buttons', () => {
  render(<ThemeSelector />);
  const buttons = screen.getAllByRole('generic').filter(el => el.style.background);
  expect(buttons.length).toBe(3);
});

test('toggles mode when clicking mode icon', () => {
  render(<ThemeSelector />);
  const toggleIcon = screen.getByAltText(/dark\/light toggle icon/i);
  
  // Initial mode is dark (per ThemeContext initial state)
  expect(toggleIcon.style.filter).toBe('invert(100%)');
  
  fireEvent.click(toggleIcon.parentElement!);
  
  // Mode should be light
  expect(toggleIcon.style.filter).toBe('invert(20%)');
});
