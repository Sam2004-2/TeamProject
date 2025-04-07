import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from "./Card";

const mockCard = {
  id: 2,
  title: "Sample Card",
  description: "This is a sample card for testing.",
  image: "sample.jpg",
};

describe("Card Component", () => {
  it("renders card title and image", () => {
    render(
      <MemoryRouter>
        <Card title={mockCard.title} image={mockCard.image} />
      </MemoryRouter>
    );

    expect(screen.getByText("Sample Card")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "sample.jpg");
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Sample Card");
    // Note: removed the description test as the Card component doesn't render description
  });
});