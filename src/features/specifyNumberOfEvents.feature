Feature: Specify number of events

  Scenario: When user hasn't specified a number, 32 is the default number
    Given main page is open
    When user doesn't specify the number of events
    Then the default number is 32

  Scenario: User can change the number of events that wants visible
    Given main page is open
    When user enters number of events
    Then then the list of events is updated to the number of events selected