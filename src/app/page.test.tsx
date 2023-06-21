import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "./page";

describe("Home page testing...", () => {
  it("should render without crashing", () => {
    render(<Home />);

    const title = screen.getByText(
      "AECC ( Next.js Starter Project Structure )"
    );
    console.log("testing...");
    expect(title).toBeInTheDocument();
  });
});
