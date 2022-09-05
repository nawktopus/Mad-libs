
// gets the <p> for the story
let storyOne = document.getElementById('storyOne');
let storyTwo = document.getElementById('storyTwo');
let storyThree = document.getElementById('storyThree');
let storyFour = document.getElementById('storyFour');
let showStory = document.getElementById('make-story'); 
let wordOne = document.getElementById('inputOne');
let wordTwo = document.getElementById('inputTwo');
let wordThree = document.getElementById('inputThree');
let wordFour = document.getElementById('inputFour');
// variables that hold the h3 values in the page editor-results
let valOne = document.getElementById('usrOne');
let valTwo = document.getElementById('usrTwo');
let valThree = document.getElementById('usrThree');
let valFour = document.getElementById('usrFour');
// hides the story until the usr pushes a button
let renderdStory = document.getElementById('renderd-story').style.visibility = 'hidden';
//get's usr input from the editor results page
let inputOne = document.getElementById('inOne');
let inputTwo = document.getElementById('inTwo');
let inputThree = document.getElementById('inThree');
let inputFour = document.getElementById('inFour');


// manipulates the <h3> and <p> to have the user input from the previous page
function render(){
    // sets the text content of the <p> tags to whatever is in local storage
    storyOne.textContent = localStorage.getItem('sentenceOne');
    storyTwo.textContent = localStorage.getItem('sentenceTwo');
    storyThree.textContent = localStorage.getItem('sentenceThree');
    storyFour.textContent = localStorage.getItem('sentenceFour');
    //gets the object from local storage and parses it back into an object
    let newValue = localStorage.getItem('drop');
    let obj = JSON.parse(newValue);
    // set the value of the <h3> to whatever the corresponding value is in the object
    valOne.textContent = 'Type in a ' + obj.choiceOne;
    valTwo.textContent = 'Type in a ' + obj.choiceTwo;
    valThree.textContent = 'Type in a ' + obj.choiceThree;
    valFour.textContent = 'Type in a ' + obj.choiceFour;
}

// When button is pushed it will show the rendered story
showStory.addEventListener('click', function(){
    document.getElementById('renderd-story').style.visibility = 'visible';
    
    //Sets the value of the <p> to the users input on the editor-results page
    wordOne.textContent = inputOne.value;
    wordTwo.textContent = inputTwo.value;
    wordThree.textContent = inputThree.value;
    wordFour.textContent = inputFour.value;
})
render();