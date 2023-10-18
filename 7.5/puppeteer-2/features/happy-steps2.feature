Feature: Booking a VIP ticket on the client page
  Scenario: Today take ticket VIP successfully
    Given I am on the booking page
    When I enter the booking details VIP
    And I select an available time
    And I choose a VIP seat
    And I submit the booking form VIP
    Then I should see a success message