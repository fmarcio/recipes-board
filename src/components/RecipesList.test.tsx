import { render, screen, fireEvent } from '../test-utils';
import RecipesList from './RecipesList';
import { expect, test, vi } from 'vitest';
import { deleteDoc } from 'firebase/firestore';

// Mock Firebase
vi.mock('firebase/firestore', () => ({
  doc: vi.fn(),
  deleteDoc: vi.fn(),
  getFirestore: vi.fn(),
}));

vi.mock('../firebase/config', () => ({
  projectFirestore: {},
}));

const mockRecipes = [
  {
    id: '1',
    title: 'Veggie Pizza',
    cookingTime: '30 minutes',
    method: 'Bake it in the oven for 30 minutes',
    ingredients: ['dough', 'tomato', 'cheese']
  }
];

test('renders list of recipes', () => {
  render(<RecipesList recipes={mockRecipes} />);
  expect(screen.getByText('Veggie Pizza')).toBeInTheDocument();
  expect(screen.getByText('30 minutes to make')).toBeInTheDocument();
});

test('shows error message when no recipes', () => {
  render(<RecipesList recipes={[]} />);
  expect(screen.getByText('No recipes found')).toBeInTheDocument();
});

test('calls deleteDoc when delete icon is clicked', async () => {
  render(<RecipesList recipes={mockRecipes} />);
  const deleteIcon = screen.getByAltText('delete icon');
  fireEvent.click(deleteIcon);
  
  expect(deleteDoc).toHaveBeenCalled();
});
