//import
import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//import components
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn't specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    given("main page is open", () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });

    let noeDOM;
    let NOEInput;
    when("user doesn't specify the number of events", () => {
      noeDOM = AppDOM.querySelector("#number-of-events");
      NOEInput = within(noeDOM).queryByRole("textbox");
      expect(NOEInput.value).toBe("");
    });
    let EventListDOM;
    let EventListItems;
    then("the default number is 32", async () => {
      await waitFor(() => {
        EventListDOM = AppDOM.querySelector("#event-list");
        EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  test("User can change the number of events that wants visible", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    given("main page is open", () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });

    let noeDOM;
    let NOEInput;
    when("user enters number of events", async () => {
      const user = userEvent.setup();
      noeDOM = AppDOM.querySelector("#number-of-events");
      NOEInput = within(noeDOM).queryByRole("textbox");

      await user.type(NOEInput, "{backspace}{backspace}10");

      expect(NOEInput.value).toBe("10");
    });

    then(
      "then the list of events is updated to the number of events selected",
      async () => {
        const EventListDOM = AppDOM.querySelector("#event-list");
        let EventListItems;

        await waitFor(() => {
          EventListItems = within(EventListDOM).queryAllByRole("listitem");
          expect(EventListItems.length).toBe(10);
        });
      }
    );
  });
});
