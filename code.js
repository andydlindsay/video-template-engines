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
