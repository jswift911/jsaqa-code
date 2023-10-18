Feature: Block Ticket Button
  Scenario: Today blocked button to take ticket
    Given I am on the booking page
    When I enter the booking details
    Then I should see the ticket button blocked