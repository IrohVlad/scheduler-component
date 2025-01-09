import {render, screen, fireEvent} from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders heading", () => {
    render(<App />);
    const heading = screen.getByTestId("heading");
    expect(heading.textContent).toBe("Vite + React");
  });

  test("increments counter on button click", () => {
    render(<App />);
    const button = screen.getByText(/count is 0/i);
    fireEvent.click(button);
    expect(button.textContent).toBe("count is 1");
  });
});
