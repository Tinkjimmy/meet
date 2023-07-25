import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    given(
      "user is on the main page and didn't click on the event's details button",
      () => {}
    );

    let AppComponent;
    let AppDOM;
    let EventListDOM;
    when("the user is on the main page", () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");
    });

    then(
      "the user should see only the name, time, time zone and the city of the events",
      async () => {
        await waitFor(() => {
          // const EventListItems =
          //   within(EventListDOM).queryAllByRole("listitem");

          const eventDetails = EventListDOM.querySelector(".show-details");
          expect(eventDetails).not.toBeInTheDocument();
        });
      }
    );
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    let EventListDOM;
    given("main page is open and details are collapsed", () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");
      const eventDetails = EventListDOM.querySelector(".description");
      expect(eventDetails).not.toBe();
    });

    let EventListItems;
    let detailsButton;
    when("user clicks on the “Show details“ button", async () => {
      const user = userEvent.setup();

      await waitFor(() => {
        EventListItems = within(EventListDOM).getAllByRole("listitem");
      });

      detailsButton = within(EventListItems[0]).queryByText("Show Details");
      await user.click(detailsButton);
    });

    then("the details of the selected event are visible", () => {
      const eventDetails = EventListDOM.querySelector(".description");
      expect(eventDetails).toBeInTheDocument();
    });
  });

  test("The user can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    let EventListDOM;
    let EventListItems;
    let detailsButton;
    let eventDetails;
    given("the user can see the deatails of an event", async () => {
      const user = userEvent.setup();
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        EventListItems = within(EventListDOM).getAllByRole("listitem");
      });

      detailsButton = within(EventListItems[0]).queryByText("Show Details");
      await user.click(detailsButton);
      eventDetails = EventListDOM.querySelector(".description");
      expect(eventDetails).toBeInTheDocument();
      expect(detailsButton).toHaveTextContent("Hide Details");
    });

    when("the user click on the “Hide details“ button", async () => {
      const user = userEvent.setup();
      const hideDetailsButton = within(EventListItems[0]).queryByText(
        "Hide Details"
      );
      await user.click(hideDetailsButton);
    });

    then("event's details are hidden again", () => {
      expect(eventDetails).not.toBeInTheDocument();
    });
  });
});
