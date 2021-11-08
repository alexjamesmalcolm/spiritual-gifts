import { render } from "@testing-library/react";
import Loading from ".";

describe("Loading", () => {
  it("should render spinner", () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
