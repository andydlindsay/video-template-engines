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
