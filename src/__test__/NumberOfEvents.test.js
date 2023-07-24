import { render, screen, fireEvent } from "@testing-library/react";
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

  test("component's textbox has a value that changes accordingly when a user type", async () => {
    const setCurrentNOE = jest.fn();
    render(<NumberOfEvents eventsNumber={32} setCurrentNOE={setCurrentNOE} />);
    const eventsTextBox = screen.getByRole("textbox");

    fireEvent.change(eventsTextBox, { target: { value: "10" } });

    expect(setCurrentNOE).toHaveBeenCalledWith("10");
  });
});
