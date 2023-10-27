Feature: Ordering tickets
    Scenario: Ordering STANDART ticket
        Given user is on "/client/index.php" page
        When user chooses day "body > nav > a:nth-child(2)"
        When user chooses movie "body > main > section:nth-child(1) > div:nth-child(2) > ul > li > a"
        When user chooses seat "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(6)"
        When user orders ticket "body > main > section > button"
        Then user sees "Вы выбрали билеты:"

    Scenario: Ordering VIP ticket
        Given user is on "/client/index.php" page
        When user chooses day "body > nav > a:nth-child(2)"
        When user chooses movie "body > main > section:nth-child(1) > div:nth-child(3) > ul > li > a"
        When user chooses seat "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(4)"
        When user orders ticket "body > main > section > button"
        Then user sees "Вы выбрали билеты:"

    Scenario: Disable ordering
        Given user is on "/client/index.php" page
        When user chooses day "body > nav > a:nth-child(2)"
        When user chooses movie "body > main > section:nth-child(1) > div:nth-child(2) > ul > li > a"
        When user chooses seat "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span.buying-scheme__chair.buying-scheme__chair_standart.buying-scheme__chair_taken"
        When user orders ticket "body > main > section > button"
        Then user can't order ticket       

