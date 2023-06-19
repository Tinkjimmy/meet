# meet
description

This app will allow users to access events in their city, filtering by city of interest and will be available 
offline.

Key Features:
● Filter events by city.
● Show/hide event details.
● Specify number of events.
● Use the app when offline.
● Add an app shortcut to the home screen.
● View a chart showing the number of upcoming events by city.

Serverless
This app uses a serverless function deployed on Amazon AWS Lambda to authorize the user to make requests to the Google Calender API to search for upcoming events.


user stories
Show/Hide Event Details:
"As a user, I want the ability to show or hide event details so that I can easily view a summarized version of the events without being overwhelmed by excessive information."
Specify Number of Events:
"As a user, I want to specify the number of events I want to see at a time so that I can customize the displayed content based on my preferences and the amount of information I want to consume."

Use the App When Offline:
"As a user, I want to be able to use the app even when I am offline so that I can access event information and perform necessary actions without relying on an internet connection."

Add an App Shortcut to the Home Screen:
"As a user, I want the option to add a shortcut of the app to my device's home screen so that I can quickly access the app without having to navigate through multiple menus or applications."

View a Chart Showing the Number of Upcoming Events by City:
"As a user, I want to view a chart that displays the number of upcoming events categorized by city so that I can easily understand the distribution of events and make informed decisions about attending events in specific locations."


scenarios
    
Feature: Event Display
  Scenario: Specify Number of Events
    Given I am on the event display page
    When I select to display a specific number of events
    Then I should see the specified number of events on the page
    And the remaining events should be available for pagination or scrolling
    
Feature: Offline App Usage
  Scenario: Use the App When Offline
    Given I have previously accessed the app and its content
    When I turn off my internet connection
    Then I should still be able to access and use the app's features and content
    
Feature: App Shortcut
  Scenario: Add App Shortcut to Home Screen
    Given I am using the app
    When I navigate to the app settings
    And I select the option to add an app shortcut to the home screen
    Then I should see a confirmation message that the shortcut has been added
    And a shortcut icon should appear on the home screen
    
Feature: Event Statistics
  Scenario: View Chart Showing Number of Upcoming Events by City
    Given I am on the event statistics page
    When I select to view the chart for the number of upcoming events by city
    Then I should see a visual representation of the event distribution by city on the chart
    And the chart should accurately reflect the number of upcoming events in each city
    
    
    ![image](https://github.com/Tinkjimmy/meet/assets/109866915/239bb969-50e2-4572-ae12-36aa42b61779)





