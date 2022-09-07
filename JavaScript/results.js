let dogOrigin = localStorage.getItem('Dog')
let catOrigin = localStorage.getItem('Cat');
let halloweenOrigin = localStorage.getItem('Halloween');
//get the items and makes them booleans instead of strings
let dog = JSON.parse(dogOrigin);
let cat = JSON.parse(catOrigin);
let halloween = JSON.parse(halloweenOrigin);

function origin (){
    //checking if our origins are true
    if(dog === true){
        //if we came from dog
        
        console.log('dog is true')
        dog = false;
        let stringDog = JSON.stringify(dog);
        localStorage.setItem('Dog', stringDog)
    }else if (cat === true){
        //if we came from cat

        console.log('cat is true')
        cat = false;
        let stringCat = JSON.stringify(cat);
        localStorage.setItem('Cat', stringCat)
    }else if (halloween === true){
        //if we came from halloween

        console.log('halloween is true')
        halloween = false;
        let stringHallo = JSON.stringify(halloween);
        localStorage.setItem('Halloween', stringHallo)
    }else{

    }
}
origin()