# Template Repository

#### Use this template repository for starting new projects. Update with new technologies and packages when necessary.

#### By (Your Name Here)

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* Webpack
* Webpack-cli
* Node Package Manager
* .babelrc
* .eslintrc

## Description

## Setup/Installation Requirements

* Select the green "Use this template" button and select "create a new repository".
* In the terminal, go to your project folder and run the command $ npm install to install node_modules.
* Run the command $ npm run build to bundle together JS files.
* Enter the command $ npm run start to start a live development server.
* Enter the command $ npm run lint to check for errors.
* Enter the command $ npm run test to test business logic.

## Known Bugs

* _Any known issues_
* _should go here_

## License

Prompt:

Super Galactic Age Calculator
A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. Write an application that determines a user's age based on a planet's solar years.

You are not required to build a UI for this application. Instead, focus on thoroughly testing each piece of functionality. Normally, we want you to follow testing best practices, which includes committing your code and test once it is passing. However, for this project, we want you to follow a different commit workflow to demonstrate your understanding of the Red, Green, Refactor workflow. Make sure that you:

Commit each test after you have written it and before writing the corresponding method in your business logic. This is the Red phase.
Then, write the business logic that corresponds to the test, verify that your test passes, and then commit your code. This is the Green phase.
Refactor your code base and tests as necessary.
At the end of your work session, verify that you have 100% coverage on all tests.
The business logic of your application should take a person's age in years and create a class that does the following:

Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
Returns their age in Venus years. (A Venus year is .62 Earth years.)
Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
Determines how many years have passed on each planet since a past birthday. For example, if a user is 56 and we want to calculate how many years have passed since their 43 birthday, we would find the following results:
13 Earth years have passed.
54.16 Mercury years have passed.
20.96 Venus years have passed.
6.91 Mars years have passed.
1.09 Jupiter years have passed.
Determines how many years have yet to pass until a future birthday. For example, if a user is 56 years and we want to calculate how many years have yet to pass until they are 61 years old, we would find the following results:
5 Earth years have yet to pass.
20.83 Mercury years have yet to pass.
8.06 Venus years have yet to pass.
2.65 Mars years have yet to pass.
0.42 Jupiter years have yet to pass.
Keep it simple! You do not have to use the JavaScript Date object to complete this prompt.

Project steps:

Will need a class constructor that accepts a users age as an argument.

Will need to determine how many days are in a solar year for:
  * Mercury
  * Venus
  * Mars
  * Jupiter

Constructor will need properties for the four above planets.

Will need a method that can calculate a users age in solar years.

Will need a method that can calculate how many years have passed since a past birthday, for each of the four planets.

Will need a method that can calculate how many years have yet to pass until a future birthday.