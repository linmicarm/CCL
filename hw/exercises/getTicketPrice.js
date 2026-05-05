/*
Assignment: Build a Movie Ticket Price Calculator
Write a function called getTicketPrice that takes two parameters: a name and an age. Based on the age, return a message that tells the person their ticket price.

The pricing rules:

Under 5 → Free
5 to 12 → $8
13 to 17 → $10
18 to 64 → $15
65 and older → $8

The returned message should include their name, for example: "Hi Alex, your ticket price is $15.

Bonus: Add an early return at the top that checks if the name is empty and returns "Please enter a name." before doing anything else.
*/

//My solution://

//Define the funtion getTicketPrice with parameters name and age
const getTicketPrice = (name, age) => {
  //no name; name must be a string; name can't be an empty string
//If any of those are true, return "Please enter a name."
  if (!name || typeof name !== "string" || !name.trim()) {
    return "Please enter a name."
//Check the age and return the appropriate message based on the pricing rules
  } else if (age < 5) {
    return `Hi ${name}, your ticket is free`
  } else if (age >= 5 && age <= 12) {
    return `Hi ${name}, your ticket price is $8`
  } else if (age >= 13 && age <= 17) {
    return `Hi ${name}, your ticket price is $10`
  } else if (age >= 18 && age <= 64) {
    return `Hi ${name}, your ticket prie is $15`
  } else {
    return `Hi ${name}, your ticket price is $8`
  }
}