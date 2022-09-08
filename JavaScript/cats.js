let userInputs = { input1:"", input2:"", input3:"", input4:"", input5:"", input6:"", input7:"", input8:"", input9:"", input10:""}; 
let tag = document.getElementById('result-btn');
let theStory = "<h1>Cat </h1><p> My cat, <span id=\"output1\"></span> , is the best kitten ever! Her mom was a tabby cat and her dad was a <span id=\"output2\"></span> so she looks more like a(n) <span id=\"output3\"></span> <span id =\"output4\"> </span> Her favorite food is <span id=\"output5\"></span> , but only if you dye it <span id=\"output6\"></span> . One of our favorite games is to <span id=\"output7\"></span> in my bedroom (except she always win). Yesterday I felt <span id=\"output8\"></span> because I thought she had run away... but it turns out she went to <span id=\"output9\"></span> all day because we were out of <span id=\"output10\"></span>. What a thoughtful kitten! </p>"
let theStory1 = "<h1>Cat</h1>"
//setting a variable to store where the user is coming from
let catOrigin = false;
// getting all the users inputs
let wordOne = document.getElementById('input1');
let wordTwo = document.getElementById('input2');
let wordThree = document.getElementById('input3');
let wordFour = document.getElementById('input4');
let wordFive = document.getElementById('input5');
let wordSix = document.getElementById('input6');
let wordSeven = document.getElementById('input7');
let wordEight = document.getElementById('input8');
let wordNine = document.getElementById('input9');
let wordTen = document.getElementById('input10');
//makes new obj for storing values
let bank = new Object();

function submitInputs() { //The user has hit Submit. Collects data from the form.
  userInputs.input1 = document.getElementById('input1').value;
  userInputs.input2 = document.getElementById('input2').value;
  userInputs.input3 = document.getElementById('input3').value;
  userInputs.input4 = document.getElementById('input4').value; 
  userInputs.input5 = document.getElementById('input5').value;
  userInputs.input6 = document.getElementById('input6').value;
  userInputs.input7 = document.getElementById('input7').value;
  userInputs.input8 = document.getElementById('input8').value;
  userInputs.input9= document.getElementById('input9').value;
  userInputs.input9= document.getElementById('input10').value;
}
  submitInputs(); 

tag.addEventListener('click', function(){
  catOrigin = true;

  bank.catOne = wordOne.value;
  bank.catTwo = wordTwo.value;
  bank.catThree = wordThree.value;
  bank.catFour = wordFour.value;
  bank.catFive = wordFive.value;
  bank.catSix = wordSix.value;
  bank.catSeven = wordSeven.value;
  bank.catEight = wordEight.value;
  bank.catNine = wordNine.value;
  bank.catTen = wordTen.value;


  let origin = JSON.stringify(catOrigin);
  localStorage.setItem('Cat', origin);
  
  let words = JSON.stringify(bank);
  localStorage.setItem('Catword', words);

  window.location.href = 'results.html';
})
