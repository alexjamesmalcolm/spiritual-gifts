import { render } from "@testing-library/react";
import { Result } from "hooks/useResults";
import Provider from "Provider";
import ValidResults from ".";

describe("ValidResults", () => {
  it("should render a single result", () => {
    const results: Result[] = [
      {
        description: <p>Description</p>,
        name: "Administration",
        rank: 1,
        score: 1,
        shortName: "Admin",
      },
    ];
    const { container } = render(
      <Provider>
        <ValidResults results={results} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
