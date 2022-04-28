# Team-Profile-Generator

## Description

When the app runs, it uses the Inquirer package to ask you questions to fill in details about the members of your team. after the user inputs the data, the program will dynamically generate a clean webpage to showcase each employee as a card, listing their Role, Employee ID, Email, and additional info depending on their role.

## Installation/Operation

To run this program, please download the program and install the required dependencies, then run the command "node index.js" to begin.

## User story: 

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

## Links/Screenshots

Github: https://github.com/jmproctor/Team-Profile-Generator
Walkthrough Video:

![Screenshot 2022-04-27 203007](https://user-images.githubusercontent.com/92322247/165659206-1cd11cdd-b5a2-4bd4-8791-a5b9dfc9e221.png)

