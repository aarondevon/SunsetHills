const fearsForm = document.querySelector('#sunset-form');
const numInputs = document.querySelectorAll('.numInput');
const output = document.querySelector('#output');
const generateNumbers = document.querySelector('#generate-numbers')




// parse inputs to num and return results as array
const parseInputToNum = () => {
  return [...numInputs].map(index => parseInt(index.value));
};

const findSolution = () => {
  const numberArray = parseInputToNum();
  console.log(numberArray);
  const solutionArray = [];
  let bigNum = numberArray[0];
  
  // Push the first number as it will
  // always see the sunset
  solutionArray.push(numberArray[0]);


  for (let index = 0; index < numberArray.length; index++) {
    if (numberArray[index] > bigNum) {
      solutionArray.push(numberArray[index]);
      bigNum = numberArray[index];
    }
  }

    // numberArray.forEach(num1 => {
    //   numberArray.forEach(num2 => {

    //     // Check sum
    //     if (num1 + num2 === parseInt(sum.value)) {
    //       solutionArray.push(`${num1} + ${num2} = ${sum.value}`);
    //     }
    //   })
    // })

  return solutionArray;
};

const addComas = () => {

};

const populateRandomNumbers = () => {
  for (let index = 0; index < numInputs.length; index++) {
    let randomNumber = Math.floor(Math.random() * 9 + 1);
    numInputs[index].value = randomNumber;
    
  }
};

const printSolution = () => {
  output.innerHTML = '';
  const solution = findSolution();
  let outPutHTML = '<p>[';
    solution.forEach(result => {
      output.innerHTML += `${result}, `;
    })
    outPutHTML += ']</p>'
};

window.onload = populateRandomNumbers();

generateNumbers.addEventListener('click', populateRandomNumbers);

fearsForm.addEventListener('click', (event) => {
  event.preventDefault();
  printSolution();
})