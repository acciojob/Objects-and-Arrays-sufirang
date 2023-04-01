const players = ['John', 'Bob', 'Alice', 'Poppy'];

const person = {
      name: 'John Doe',
      age: 80
    };

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

var team = players;
var team1 = players.slice(); // creates a shallow copy of the players array
var cap1 = Object.assign({}, person); // creates a shallow copy of the person object

console.log(team); // Output: ["Alice", "Bob", "Charlie"]
console.log(team1); // Output: ["Alice", "Bob", "Charlie"]
console.log(cap1); // Output: {name: "David", age: 30}


export {players,person,team,team1,cap1}
