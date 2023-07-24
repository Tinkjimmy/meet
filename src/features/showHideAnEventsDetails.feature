Feature: Show/Hide an event's details

  Scenario: An event element is collapsed by default
    Given user is on the main page and didn't click on the event's details button
    When the user is on the main page
    Then the user should see only the name, time, time zone and the city of the events

  Scenario: User can expand an event to see its details
    Given main page is open and details are collapsed
    When user clicks on the “Show details“ button
    Then the details of the selected event are visible

  Scenario: The user can collapse an event to hide its details
    Given the user can see the deatails of an event
    When the user click on the “Hide details“ button
    Then event's details are hidden again