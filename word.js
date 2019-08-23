var addBtn = document.querySelector('.addBtn')
var myText =document.querySelector('.myText')
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

function add(){

factoryWord.add(myText.value)


wordsEntered.innerHTML = factoryWord.allEntered()
clearError()
short.innerHTML = factoryWord.myShort()
long.innerHTML = factoryWord.myLong()
errors.innerHTML = factoryWord.errorM()

}
addBtn.addEventListener('click',add)
