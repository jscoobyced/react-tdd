import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Checking Jest is properly configured", () => {
  it("Can find the root of the application", () => {
    render(<App></App>);
    expect(screen.getByTestId('main')).toBeDefined();
  });
});
