var addBtn = document.querySelector('.addBtn')
var wordsRan = document.querySelector('.ranBtn')
var myText = document.querySelector('.myText')
var wordsEntered = document.querySelector(".wordsEntered")
var short = document.querySelector(".short")
var long = document.querySelector(".long")
var errors = document.querySelector('.theError')

var factoryWord = wordGame()

function clearError() {
    setTimeout(function () {
        errors.innerHTML = "";
    }, 2000);
}

function add() {

    factoryWord.add(myText.value)

    if(factoryWord.allCount() > 01){
        wordsEntered.innerHTML = 'Names Entered Are:  ' + factoryWord.allEntered()
    }
 
   

        short.innerHTML = factoryWord.myShort() + ' Is The Shortest word With ' + factoryWord.shortCount() + ' Letters';
    

        long.innerHTML = factoryWord.myLong() + ' Is The Longest word With ' + factoryWord.longCount() + ' Letters';
    
    clearError()
    errors.innerHTML = factoryWord.errorM()
    
}

function randoms() {
    myText.value = factoryWord.ranWords()
}
wordsRan.addEventListener('click', randoms)
addBtn.addEventListener('click', add)
