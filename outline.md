### Basic function, no arguments, returns a string

```js
const sayHello = () => {
  return 'hello there';
};

const result = sayHello();
console.log(result); // 'hello there';
```

### We can extend the functionality by accepting an argument

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

* The order of the arguments **is** important

```js
sayHello('Alice', 27, 'January 11th, 1989');
// is different than
sayHello('Alice', 'January 11th, 1989', 27);
```

### It is a better idea to accept an object
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

```js
// or use a named object
const variables = {
  name: 'Alice',
  age: 27,
  birthDate: 'January 11th, 1989'
};

const result = sayHello(variables);

console.log(result); // 'hello there Alice, you are 27 years old because you were born on January 11th, 1989';
```

### Instead of returning a sentence, what if we return a string containing some HTML?

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
