import { render, screen, fireEvent } from '../test-utils';
import Searchbar from './Searchbar';
import { expect, test, vi } from 'vitest';

// Mock useNavigate
const mockedUsedNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockedUsedNavigate,
  };
});

test('updates input value on change', () => {
  render(<Searchbar />);
  const input = screen.getByLabelText(/Search/i) as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'pizza' } });
  expect(input.value).toBe('pizza');
});

test('navigates to search page on submit', () => {
  render(<Searchbar />);
  const input = screen.getByLabelText(/Search/i);
  fireEvent.change(input, { target: { value: 'pizza' } });
  
  const form = input.closest('form');
  if (form) fireEvent.submit(form);
  
  expect(mockedUsedNavigate).toHaveBeenCalledWith('/search?q=pizza');
});
