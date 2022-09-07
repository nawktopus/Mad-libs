let userInputs = { input1:"", input2:"", input3:"", input4:"", input5:"", input6:"", input7:"", input8:"", input9:"", input10:""}; 
let theStory = "<h1>Halloween</h1><p>I can't believe it's already <span id=\"output1\"></span> I can't wait to put on my <span id=\"output2\"></span> and visit <span id=\"output3\"></span> in my neighboor hood, this year, I am going to dress up as a <span id=\"output4\"></span> with <span id=\"output5\"></span>  Before i <span id=\"output6\"></span> I make sure to grab my <span id=\"output7\"></span><span id=\"output8\"></span> <span id=\"output9\"></span>. to hold all of my <span id=\"output10\"></span>  Finally, all of my <span id=\"output11\"></span>, <span id=\"output12\"></span>, are ready to go.</p>";
let theStory2 = "<h1>Dog</h1>"
let dogBtn = document.getElementById('dog-button');
let origin = false;

dogBtn.addEventListener('click', function(){
  origin = true;
  let boolean = JSON.stringify(origin)
  let dogOrigin = localStorage.setItem('Dog', boolean)
  console.log(dogOrigin)

  window.location.href = 'results.html'
})
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
  
  
  // createMadLibs(); //Calls the function to write the story.
}
  submitInputs(); //Collects any data from the form.



  

//Charles added local storage for dog
tag.addEventListener('click', function(){
  window.open(editor.html);
  localStorage.setItem('test', 'All my words');
  localStorage.getItem('test');
  window.open(results.html);
})

// function createMadLibs() { //Creates the story.
//   document.getElementById("theStory").innerHTML = theStory;
// //   document.getElementById("theStory2").innerHTML = theStory2;
//   document.getElementById("output1").innerHTML = userInputs.input1;
//   document.getElementById("output2").innerHTML = userInputs.input2;
//   document.getElementById("output3").innerHTML = userInputs.input3;
//   document.getElementById("output4").innerHTML = userInputs.input4;
//   document.getElementById("output5").innerHTML =userInputs.input5;
//   document.getElementById("output6").innerHTML = userInputs.input6;
//   document.getElementById("output7").innerHTML = userInputs.input7;
//   document.getElementById("output8").innerHTML = userInputs.input8;
//   document.getElementById("output9").innerHTML =userInputs.input9;

// }
