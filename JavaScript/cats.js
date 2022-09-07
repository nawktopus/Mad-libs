let userInputs = { input1:"", input2:"", input3:"", input4:"", input5:"", input6:"", input7:"", input8:"", input9:"", input10:""}; 
let tag = document.getElementById('result-btn');

let theStory = "<h1>Cat </h1><p> My cat, <span id=\"output1\"></span> , is the best kitten ever! Her mom was a tabby cat and her dad was a <span id=\"output2\"></span> so she looks more like a(n) <span id=\"output3\"></span> <span id =\"output4\"> </span> Her favorite food is <span id=\"output5\"></span> , but only if you dye it <span id=\"output6\"></span> . One of our favorite games is to <span id=\"output7\"></span> in my bedroom (except she always win). Yesterday I felt <span id=\"output8\"></span> because I thought she had run away... but it turns out she went to <span id=\"output9\"></span> all day because we were out of <span id=\"output10\"></span>. What a thoughtful kitten! </p>"


let theStory1 = "<h1>Cat</h1>"
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
  createMadLibs(); //Calls the function to write the story.
}
  submitInputs(); //Collects any data from the form.
function createMadLibs() { //Creates the story.
  document.getElementById("theStory").innerHTML = theStory;
//   document.getElementById("theStory2").innerHTML = theStory2;
  document.getElementById("output1").innerHTML = userInputs.input1;
  document.getElementById("output2").innerHTML = userInputs.input2;
  document.getElementById("output3").innerHTML = userInputs.input3;
  document.getElementById("output4").innerHTML = userInputs.input4;
  document.getElementById("output5").innerHTML =userInputs.input5;
  document.getElementById("output6").innerHTML = userInputs.input6;
  document.getElementById("output7").innerHTML = userInputs.input7;
  document.getElementById("output8").innerHTML = userInputs.input8;
  document.getElementById("output9").innerHTML =userInputs.input9;
  document.getElementById("output10").innerHTML =userInputs.input10;
}

tag.addEventListener('click', function(){
  window.open(editor.html);
  localStorage.setItem('test', 'All my words');
  localStorage.getItem('test');
  window.open(results.html);
})

