import { act, fireEvent, render } from "@testing-library/react";
import { Result } from "hooks/useResults";
import ResultCategory from ".";

describe("ResultCategory", () => {
  it("should render Administration result", () => {
    const result: Result = {
      name: "Administration",
      description: <p>Description</p>,
      rank: 2,
      score: 20,
      shortName: "Admin",
    };
    const { container } = render(<ResultCategory result={result} />);
    expect(container).toMatchSnapshot();
  });
  it("should display collapse button if result category is rank 3", () => {
    const result: Result = {
      name: "Administration",
      description: <p>Description</p>,
      rank: 3,
      score: 20,
      shortName: "Admin",
    };
    const { container } = render(<ResultCategory result={result} />);
    const button = container.querySelector("button");
    expect(button).toHaveTextContent("Collapse");
  });
  it("should display expand button if result category is rank 4", () => {
    const result: Result = {
      name: "Administration",
      description: <p>Description</p>,
      rank: 4,
      score: 20,
      shortName: "Admin",
    };
    const { container } = render(<ResultCategory result={result} />);
    const button = container.querySelector("button");
    expect(button).toHaveTextContent("Expand");
  });
  it("should expand category if expand button is clicked", () => {
    const result: Result = {
      name: "Administration",
      description: <p>Description</p>,
      rank: 4,
      score: 20,
      shortName: "Admin",
    };
    const { container } = render(<ResultCategory result={result} />);
    const button = container.querySelector("button");
    act(() => {
      if (button) fireEvent.click(button);
    });
    expect(button).toHaveTextContent("Collapse");
  });
  it("should collapse category if collapse button is clicked", () => {
    const result: Result = {
      name: "Administration",
      description: <p>Description</p>,
      rank: 3,
      score: 20,
      shortName: "Admin",
    };
    const { container } = render(<ResultCategory result={result} />);
    const button = container.querySelector("button");
    act(() => {
      if (button) fireEvent.click(button);
    });
    expect(button).toHaveTextContent("Expand");
  });
});
