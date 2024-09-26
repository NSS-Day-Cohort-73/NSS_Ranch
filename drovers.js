const { database } = require("./database.js")

// Creates a new function named hireDrovers.
const hireDrovers = (herdSize) => {
// Sets herdSize equal to the value of hireDrovers.

// Creates a new empty array of drovers.
    const drovers = []
// Tells drovers to look in the database module for allDrovers.
    const allDrovers = database.drovers
// Creating new variable numberNeeded to equal herdSize divided by 10.
    const numberNeeded = herdSize / 10

// This loop is counting from 0 up to numberNeeded - 1 and repeating an action each time. It helps you run code multiple times without needing to write the same thing over and over again.
    for (let counter = 0; counter < numberNeeded; counter++) {
// This code generates a random index based on the length of the allDrovers array and assigns it to the variable randomHerderId.
        const randomHerderId = Math.floor(Math.random() * allDrovers.length)
// This line selects a random element from the allDrovers array (using the index randomHerderId) and adds it to the drovers array by pushing it to the end of that array. The result is that drovers is expanded with one more element from allDrovers.
        drovers.push(allDrovers[randomHerderId])
    }
    return drovers

}

module.exports = { hireDrovers }
