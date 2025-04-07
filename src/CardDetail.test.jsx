import { vi } from 'vitest';
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CardDetail from "./CardDetail";

// Mock the fetch call
global.fetch = vi.fn();

describe("CardDetail Component", () => {
  beforeEach(() => {
    // Reset all mocks before each test
    vi.resetAllMocks();
  });

  it("renders card details based on route params", async () => {
    // Set up the mock response
    global.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: 1,
          title: "Detail Card",
          details: {
            description: "Detailed view of a card",
            images: ["detail.jpg"]
          }
        }
      ]
    });

    render(
      <MemoryRouter initialEntries={["/card/1"]}>
        <Routes>
          <Route path="/card/:id" element={<CardDetail />} />
        </Routes>
      </MemoryRouter>
    );

    // Wait for the loading state to disappear
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));

    // Check that the component renders with the expected data
    expect(screen.getByText("Detail Card")).toBeInTheDocument();
    expect(screen.getByText("Detailed view of a card")).toBeInTheDocument();
    expect(screen.getByAltText(/Detail Card - image 1/i)).toHaveAttribute("src", "detail.jpg");
    
    // Verify that fetch was called with the correct URL
    expect(fetch).toHaveBeenCalledWith('/data/cards.json');
  });
});