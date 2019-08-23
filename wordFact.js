function wordGame() {
    var myList = [];
    var myCheckLong = 0;
    var myEmpty = '';
    var addWord;
    var error = '';
    var shortest = '';
    var words = ['processing','offline','online','debonairs','Studio','javascript','buildings','Workshops','Software','Github','Golden','Mentors','Activities','Samsung','uberEats','geography','science','laptop','jesse', 'odwa', 'khanyiso', 'jason', 'codex','pizza','siwe','iviwe','makho','tabang','andre']

    var regex = /(\+|\-)?[0-9!@#$%^&*();,.?"^$:^\d+=/${/'}`''"\[.*?\]|<>]/i

    function myError() {
        return error
    }


    function wordAdd(word) {
        error = ''
         addWord = word.toUpperCase().trim()

        var myTest = regex.test(addWord)
        if (myTest == false) {
            myList = addWord.split(' ');
            if (addWord.length <= 0) {
                error = 'Please enter Words!!'
            }
        }
        else {
            error = 'Please Enter Correct Words'
        }

    }

    function all() {
        for (var i = 0; i < myList.length; i++) {
            myEmpty = myList[i]
        }
        return myList.join(' ')
    }

    function count1() {
        if(myList   )
        return myList.length
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

    function count2() {
        return myEmpty.length
    }

    function shortestWord() {
        if(myList.length>0){
        shortest = myList.reduce((shortestWord, currentWord) => {
            return currentWord.length < shortestWord.length ? currentWord : shortestWord;
        }, myList[0]);
    }
        return shortest;
    }

    function count3() {
        return shortest.length
    }

function myRan(){
    for(var i = 0; i < 4; i++) {
        var all = words[Math.floor(Math.random() * words.length)]
        myList.push(all)
        }
       return myList.join(' ')
}

    return {
        add: wordAdd,
        allEntered: all,
        myLong: longestWord,
        myShort: shortestWord,
        errorM: myError,
        allCount: count1,
        longCount: count2,
        shortCount: count3,
        ranWords: myRan
    }

}