let dogOrigin = localStorage.getItem('Dog')
let catOrigin = localStorage.getItem('Cat');
let halloweenOrigin = localStorage.getItem('Halloween');
//get the items and makes them booleans instead of strings
let dog = JSON.parse(dogOrigin);
let cat = JSON.parse(catOrigin);
let halloween = JSON.parse(halloweenOrigin);
let pOne = document.getElementById('One');
let pTwo = document.getElementById('Two');
let pThree = document.getElementById('Three');
let pFour = document.getElementById('Four');
let pFive = document.getElementById('Five');
let pSix = document.getElementById('Six');
let pSeven = document.getElementById('Seven');
let pEight = document.getElementById('Eight');
let pNine = document.getElementById('Nine');
let pTen = document.getElementById('Ten');
let pEleven = document.getElementById('Eleven');
let pTwelve = document.getElementById('Twelve');
let pThirteen = document.getElementById('Thirteen');
let pFourteen = document.getElementById('Fourteen');
let pFifteen = document.getElementById('Fifteen');
let pSixteen = document.getElementById('Sixteen');
let pSeventeen = document.getElementById('Seventeen');
let pEighteen = document.getElementById('Eighteen');
let pNineteen = document.getElementById('Nineteen');
let pTwenty = document.getElementById('Twenty');
let pTwentyOne = document.getElementById('TwentyOne');
let pTwentyTwo = document.getElementById('TwentyTwo');
let pTwentyThree = document.getElementById('TwentyThree');
let pTwentyFour = document.getElementById('TwentyFour');
let pTwentyFive = document.getElementById('TwentyFive');
let pTwentySix = document.getElementById('TwentySix');
let pTwentySeven = document.getElementById('TwentySeven');



function origin (){
    //checking if our origins are true
    if(dog === true){
        //if we came from dog
        let catWord = localStorage.getItem('bank');
        let values = JSON.parse(catWord)
        //change <p> to the dog story and dog variables
        pOne.textContent = 'catOne.value';


        console.log('dog is true')
        dog = false;
        let stringDog = JSON.stringify(dog);
        localStorage.setItem('Dog', stringDog)
    }else if (cat === true){
        //if we came from cat
        pOne
        //change <p> to cat story and cat variables
       
        console.log('cat is true')
        cat = false;
        let stringCat = JSON.stringify(cat);
        localStorage.setItem('Cat', stringCat)
    }else if (halloween === true){
        //if we came from halloween


        //change <p> Halloween story and halloween variables

        console.log('halloween is true')
        halloween = false;
        let stringHallo = JSON.stringify(halloween);
        localStorage.setItem('Halloween', stringHallo)
    }else{

    }
}

origin()