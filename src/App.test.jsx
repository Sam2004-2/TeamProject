// src/App.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { describe, it, expect, vi } from 'vitest';

// Mock fetch before tests
beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, title: 'Test Card 1', image: 'image1.jpg' },
          { id: 2, title: 'Test Card 2', image: 'image2.jpg' }
        ])
    })
  );
});

describe('App Component', () => {
  it('renders sidebar and top menu', async () => {
    render(<App />);

    expect(screen.getByText('Laura King')).toBeInTheDocument();
    expect(screen.getByText('Plan')).toBeInTheDocument();
    expect(screen.getByText('Goals')).toBeInTheDocument();
    expect(screen.getByText('Notes')).toBeInTheDocument();
    expect(screen.getByText('Messages')).toBeInTheDocument();
    expect(screen.getByText('Media')).toBeInTheDocument();
    expect(screen.getByText('Calendar')).toBeInTheDocument();
  });

  it('displays cards from JSON', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('Test Card 1')).toBeInTheDocument();
      expect(screen.getByText('Test Card 2')).toBeInTheDocument();
    });
  });
});
