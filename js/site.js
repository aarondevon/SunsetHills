const fearsForm = document.querySelector('#fears-form');
const numInputs = document.querySelectorAll('.numInput');
const sum = document.querySelector('#sum');
const output = document.querySelector('#output');

fearsForm.addEventListener('submit', (event) => {
  event.preventDefault();
  printSolution();
})

// parse inputs to num and return results as array
const parseInputToNum = () => {
  return [...numInputs].map(index => parseInt(index.value));
}

const findSolution = () => {
  const numberArray = parseInputToNum();
  console.log(numberArray);
  const solutionArray = [];
  
    numberArray.forEach(num1 => {
      numberArray.forEach(num2 => {

        // Check sum
        if (num1 + num2 === parseInt(sum.value)) {
          solutionArray.push(`${num1} + ${num2} = ${sum.value}`);
        }
      })
    })

  return solutionArray.length > 0 ? solutionArray : 'No matching sum could be found.';
};

const printSolution = () => {
  output.innerHTML = '';
  const solution = findSolution();
  if (Array.isArray(solution)) {
    solution.forEach(result => {
      output.innerHTML += `<p>${result}</p>`;
    })
  } else {
    output.innerHTML = `<p>${solution}</p>`;
  }
}