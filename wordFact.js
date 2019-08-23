function wordGame() {
    var myList = []
    var myCheckLong = 0;
    var myEmpty = '';
    var error = ''
    var regex = /(\+|\-)?[0-9!@#$%^&*();,.?"^$:^\d+=/${/'}`''"\[.*?\]|<>]/i

    function myError(){
        return error
    }
    function wordAdd(word) {
        error = ''
        var addWord = word.toUpperCase().trim()

        var myTest = regex.test(addWord)
        if(myTest == false){
        myList = addWord.split(' ');
        if(addWord.length <=0){
            error = 'Please enter Words!!'
        }
    }
    else{
        error = 'Please Enter Correct Words'
    }

    }

    function all(){
        for (var i = 0; i < myList.length; i++) {
            myEmpty = myList[i]
           
        }
        return myList
    }



    function longestWord() {
        for (var i = 0; i < myList.length; i++) {
            if (myCheckLong <= myList[i].length) {
                myCheckLong = myList[i].length;
                myEmpty = myList[i]
            }
        }
        return myEmpty
    }

    function shortestWord() {

        var shortest = myList.reduce((shortestWord, currentWord) => {
            return currentWord.length < shortestWord.length ? currentWord : shortestWord;
          }, myList[0]);
          return shortest;
    }



    return {
        add: wordAdd,
        allEntered: all,
        myLong: longestWord,
        myShort: shortestWord,
        errorM:myError

    }

}