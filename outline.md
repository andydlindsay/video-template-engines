# Purpose
* Demonstrate that `res.render` is simply a function that takes in an object and returns a string (in the form of HTML)
* Students often struggle with how data ends up in the template
* Placement in curriculum: W3D1 or W2E

# Outline

### Basic function, no arguments, returns a string
* Start with something familiar and simple

```js
const sayHello = () => {
  return 'hello there';
};

const result = sayHello();
console.log(result); // 'hello there';
```

### We can extend the functionality by accepting an argument
* Having the function accept an argument allows us to vary the return value predictably
* This extends the usefulness of the function (hopefully review)

```js
const sayHello = (name) => {
  return `hello there ${name}`;
};

const result = sayHello('Alice');
console.log(result); // 'hello there Alice';
```

### We can accept more than one argument

```js
const sayHello = (name, age, birthDate) => {
  return `hello there ${name}, you are ${age} years old because you were born on ${birthDate}`;
};

const result = sayHello('Alice', 27, 'January 11th, 1989');
console.log(result); // 'hello there Alice, you are 27 years old because you were born on January 11th, 1989';
```

### Accepting multiple arguments has some drawbacks
* We can't skip an argument

```js
sayHello('Alice', , 'January 11th, 1989'); // ERROR!
```

* The order of the arguments _is_ **important**

```js
sayHello('Alice', 27, 'January 11th, 1989');
// is different than
sayHello('Alice', 'January 11th, 1989', 27);
```

### What if we accept an object instead?
* We can specify the keys of the object in any order
* We can skip a key if we don't need to pass that information in

```js
const sayHello = (options) => {
  return `hello there ${options.name}, you are ${options.age} years old because you were born on ${options.birthDate}`;
};

const result = sayHello({
  name: 'Alice',
  age: 27,
  birthDate: 'January 11th, 1989'
});

console.log(result); // 'hello there Alice, you are 27 years old because you were born on January 11th, 1989';
```

### Let's give that object a name
* Instead of passing an anonymous object, we'll store it in `variables` first

```js
const variables = {
  name: 'Alice',
  age: 27,
  birthDate: 'January 11th, 1989'
};

const result = sayHello(variables);

console.log(result); // 'hello there Alice, you are 27 years old because you were born on January 11th, 1989';
```

### Let's get creative with the return value
* Instead of returning a sentence, what if we return a string containing some HTML?

```js
const sayHello = (options) => {
  return `
    <div>
      <h2>Hello there ${options.name}</h2>
      <p>You are ${options.age} years old because you were born on ${options.birthDate}</p>
    </div>
  `;
};

const variables = {
  name: 'Alice',
  age: 27,
  birthDate: 'January 11th, 1989'
};

const result = sayHello(variables);

console.log(result);
/*
<div>
  <h2>Hello there Alice</h2>
  <p>You are 27 years old because you were born on January 11th, 1989</p>
</div>
*/
```

### We could also specify which template we want our variables to populate
* NOTE: I think this iteration might be too in the weeds and the video could end after the previous one

```js
const sayHello = (template, options) => {
  let output;
  if (template === 'templateOne') {
    output = `
      <div>
        <h2>Hello there ${options.name}</h2>
        <p>You are ${options.age} years old because you were born on ${options.birthDate}</p>
      </div>
    `;
  } else {
    output = `
      <div>
        <h2>You are logged in as ${options.name}</h2>
        <p>Birthdate: ${options.birthDate}</p>
        <p>Current Age: ${options.age}</p>
      </div>
    `;
  }
  return output;
};

const variables = {
  name: 'Alice',
  age: 27,
  birthDate: 'January 11th, 1989'
};

const result = sayHello('templateTwo', variables);

console.log(result);
/*
<div>
  <h2>You are logged in as Alice</h2>
  <p>Birthdate: January 11th, 1989</p>
  <p>Current Age: 27</p>
</div>
*/
```
