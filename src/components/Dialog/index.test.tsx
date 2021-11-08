import { act, fireEvent, render } from "@testing-library/react";
import Dialog from ".";

const sleep = (duration: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, duration));

describe("Dialog", () => {
  it("should render a button", () => {
    const content = <p>Dialog content</p>;
    const { container } = render(<Dialog>{content}</Dialog>);
    const button = container.querySelector("button");
    expect(button).toHaveTextContent("Close");
  });
  it("should render the dialog content", () => {
    const content = "Dialog content";
    const { container } = render(
      <Dialog>
        <p>{content}</p>
      </Dialog>
    );
    expect(container).toHaveTextContent(content);
  });
  it("should close dialog when Close button is clicked", () => {
    const content = <p>Dialog content</p>;
    const { container } = render(<Dialog>{content}</Dialog>);
    const button = container.querySelector("button");
    act(() => {
      if (button) fireEvent.click(button);
    });
    expect(container).toBeEmptyDOMElement();
  });
  it("should not close in 100ms if its duration is 200ms", async () => {
    const testWaitTime = 100;
    const actualWaitTime = 200;
    const content = "content";
    const { container } = render(
      <Dialog duration={actualWaitTime}>
        <p>{content}</p>
      </Dialog>
    );
    await act(() => sleep(testWaitTime));
    expect(container).toHaveTextContent(content);
  });
  it("should close in 200ms if its duration is 100ms", async () => {
    const testWaitTime = 200;
    const actualWaitTime = 100;
    const { container } = render(
      <Dialog duration={actualWaitTime}>
        <p>content</p>
      </Dialog>
    );
    await act(() => sleep(testWaitTime));
    expect(container).toBeEmptyDOMElement();
  });
});
