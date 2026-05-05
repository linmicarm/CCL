/*
Write a function called login that takes a username and password as parameters. Use early returns to check for problems before letting the user in.

The rules to validate:

If username is empty → return "Please enter a username."
If password is empty → return "Please enter a password."
If password is less than 8 characters → return "Password must be at least 8 characters."
If everything passes → return "Welcome back " + username + "!"
*/

//My Solution://

//Define a function called login that takes in two parameters, username and password
const login = (username, password) => {
//Check if the username is empty, if it is return a message asking the user to enter a username
  if (!username) {
    return 'Please enter a username.'
  }
//Check if the password is empty, if it is return a message asking the user to enter a password
  if (!password) {
    return 'Please enter a password.'
//Check if the password is less than 8 characters, if it is return a message saying the password must be at least 8 characters
  }
  if (password.length < 8) {
    return 'Password must be at least 8 characters.'
//If all the checks pass, return a welcome message that includes the username
  }
  return `Welcome back ${username}!`
}
