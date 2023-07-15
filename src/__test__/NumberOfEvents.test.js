import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  test("check element with role of textbox", () => {
    render(<NumberOfEvents />);
    const eventsTextBox = screen.queryByRole("textbox");
    expect(eventsTextBox).toBeInTheDocument();
    expect(eventsTextBox).toHaveClass("textbox");
  });

  test("default value of the input field is 32", async () => {
    render(<NumberOfEvents eventsNumber={32} />);
    const eventsTextBox = screen.queryByRole("textbox");
    expect(eventsTextBox).toHaveValue("32");
  });

  test("component’s textbox has a value that changes accordingly when a user", async () => {
    const handleEventNumberChange = jest.fn();
    render(
      <NumberOfEvents
        eventsNumber={32}
        onEventNumberChange={handleEventNumberChange}
      />
    );
    const eventsTextBox = screen.getByRole("textbox");
    await userEvent.type(eventsTextBox, "10");
    expect(handleEventNumberChange).toHaveBeenCalled();
  });
});
