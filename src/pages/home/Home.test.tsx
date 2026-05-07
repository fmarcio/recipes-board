import { render, screen, waitFor } from '../../test-utils';
import Home from './Home';
import { expect, test, vi } from 'vitest';
import { onSnapshot } from 'firebase/firestore';

// Mock Firebase
vi.mock('firebase/firestore', () => ({
  collection: vi.fn(),
  onSnapshot: vi.fn(() => vi.fn()),
  getFirestore: vi.fn(),
}));

vi.mock('../../firebase/config', () => ({
  projectFirestore: {},
}));

test('renders loading state initially', () => {
  render(<Home />);
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
});

test('renders recipes when data is fetched', async () => {
  const mockUnsub = vi.fn();
  (onSnapshot as any).mockImplementation((ref: any, callback: any) => {
    callback({
      empty: false,
      docs: [
        {
          id: '1',
          data: () => ({
            title: 'Mock Pizza',
            cookingTime: '20 min',
            method: 'Test method',
            ingredients: ['test']
          })
        }
      ]
    });
    return mockUnsub;
  });

  render(<Home />);

  await waitFor(() => {
    expect(screen.getByText('Mock Pizza')).toBeInTheDocument();
  });
});
