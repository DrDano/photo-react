import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

describe("Contact", () => {
  it("renders", () => {
    render(<Contact />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("has text 'submit'", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("button")).toHaveTextContent("Submit");
  });
});

afterEach(cleanup);
