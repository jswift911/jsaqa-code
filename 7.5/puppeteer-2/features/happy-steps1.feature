Feature: Booking a STANDART ticket on the client page
  As a user
  I want to be able to book a STANDART ticket
  So that I can watch a movie in the cinema

  Scenario: Book a STANDART ticket successfully
    Given I am on the client page
    When I select a movie with title "Зверополис" and origin "США" on the 2 day
    And I select an available time for the movie
    And I select the first available STANDART seat
    And I submit the booking form STANDART
    Then I should see a success message with text "После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал."
