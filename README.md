# CribQuests

## Description
Welcome to CribQuest, a streamlined real estate web application that empowers users to filter property listings by price, location, and the number of bedrooms and bathrooms. This project, built with Express.js, showcases user authentication using sessions and includes features for registration, login, logout, and example routes to display card-related data.
## Table of Contents
Installation
Usage
Routes
 /login
 /logout
 /card/
 POST /
 POST /login
License
Contributors

## Sreenshots

![homepage](<images/homepage screenshot.png>)

![login page](images/login-page.png)

## Installation
1. Clone the repository
2. Run npm install to install dependencies
3. Setup your databse configurations in config/connection.js or .env file

## Usage
To start the application, run:
1. Run npm start to start the server
2. Open a web browser and navigate to http://localhost:3001
3. Register a new user or login with an existing user

## Routes

### /login
Get/login:Renders the login page.
### /logout
Post/Lgout: Logs out the current user.
### /card/
Get /card/: Fetches details of a specific card on :id
### POST/
Post/: Creates a new user. Parameters (Username,email,password)

### POST /login
Post/login: Authenicates user login. Parameters (email,password)

## License
MIT License

## Contributors
Marissa Melo - https://github.com/marissamelo91
Matthew Andrade - https://github.com/mandrade09
Charlie Hutching - https://github.com/CharlesHut
Urie Williams - https://github.com/urie-w

## Credits
Our TAs and Classmate (Clarence Cheung, Mariah Wear, and Thinh Nguyen) helped tremendously throughout the duration of the project.
