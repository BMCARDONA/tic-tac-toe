const personFactory = (name, age) => {
  const sayHello = () => console.log('hello!');
  // shorthand for:
  // return {name: name, age: age, sayHello: sayHello};
  // Notice that we have to return sayHello
  return { name, age, sayHello };
};