let typeOne = document.getElementById('inOne');
let typeTwo = document.getElementById('inTwo');
let typeThree = document.getElementById('inThree');
let typeFour = document.getElementById('inFour');
let sub = document.getElementById('usr-sub');
let choices = new Object();

// let storyOne = document.getElementById('storyOne');

sub.addEventListener('click', function(){
    localStorage.setItem('sentenceOne', typeOne.value);
    localStorage.setItem('sentenceTwo', typeTwo.value);
    localStorage.setItem('sentenceThree', typeThree.value);
    localStorage.setItem('sentenceFour', typeFour.value);

    choices.choiceOne = document.getElementById('dropOne').value;
    choices.choiceTwo = document.getElementById('dropTwo').value;
    choices.choiceThree = document.getElementById('dropThree').value;
    choices.choiceFour = document.getElementById('dropFour').value;
    
    let choice = JSON.stringify(choices);
    localStorage.setItem('drop', choice);
    console.log('Values stored');
    
    window.location.href = 'editor-results.html';
})

