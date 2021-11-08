import { render } from "@testing-library/react";
import Provider from "Provider";
import BadResultsLink from ".";

describe("BadResultsLink", () => {
  it("should render bad results link page", () => {
    const { container } = render(
      <Provider>
        <BadResultsLink />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
