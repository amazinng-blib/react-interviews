// what is the output

const user = {
  name: 'Ernest',
  greet() {
    return `Hello, ${this.name}`;
  },
  farewell: () => {
    return `Goodbye, ${this.name}!`;
  },
};

console.log(user.greet());
//this will return the user because is normal function

console.log(user.farewell());

//this will not return the username because arrow function is used
//Arrow function don't bind their own this
