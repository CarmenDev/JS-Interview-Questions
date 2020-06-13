const terms = ['method', 'constructor', 'spread operator', 'this-keyword', 'closure', 'recursion', 'abstraction', 'inheritance', 'polymorphism', 'encapsulation', 'JSON objects', 'callbacks', 'arrow functions', 'destructuring', 'switch functions', 'forEach', 'filter', 'map', 'reduce', 'pop()', 'push()', 'pass by value', 'pass by reference', '.toUpperCase()', '.toLowerCase()', '.trim()', '.replace()', 'branching statements', 'DOM', 'assignment', 'scope', 'for loop', 'while loop', 'do while loop', 'pseudocode', 'relational operators', 'comparison operators', 'Integrated Development Environment', 'Array.isArray()', 'ES6 modules', 'nesting', 'NaN', 'Number.prototype.toString()', 'Number.prototype.toFixed()', 'global parseFloat()', 'Math.ceil()', 'Math.floor()', 'Math.random()', 'Math.max()', 'Math.min()'];

const header = document.querySelector('.header');

function getRandomTerm(array) {
    return array[(Math.random() * array.length)];
}
console.log(getRandomTerm(terms));


function updateHTML() {
  const randomTerm = getRandomTerm(terms);
  let intervalCounter = 0;

  const interval = setInterval(() => {
      const randomTerm = terms[Math.floor(Math.random() * terms.length)];
      header.textContent = randomTerm;

      intervalCounter++;

      if(intervalCounter > 15) {
          clearInterval(interval);
      }
  }, 100);

  document.getElementById('header').innerText = randomTerm;

}