
//---------------------TESTING AREA-------------------------------------------


//---------------------------------Game Setup---------------------------------
var wordLibrary = 
    [
        "hang","rude","shape","average","good","numerous","suffer",
        "stuff","unusual","excited","surround","produce","grab",
        "exclusive","hope","eggs","lackadasical","door","heavy","flame",
        "vengeful","battle","pig","impolite","coil","vessel","parched",
        "bump","scale","bright","misty","prepare","zealous","hospitable",
        "rightful","spotted","pump","wrap","knife"
    ];
var usedWords = [];
var lettersGuessed = [];
var word_guessed = false;
var word = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
usedWords.push(word);

var wordObj = [];                                                                // 
for (i=0; i<word.length; i++)                                                    // array of letters and 1/0 : 1 = show, 0 = dont show(default)
{wordObj.push([0,word[i]]);}                                                     // ex.  [[0,"p"],[1,"e"],[0,"t"]] = "-e-"
updateWordText();


//----------------------------------  GAME   ----------------------------------
var lives = 10;

document.onkeyup = function(event)
    {
        var usrInput = event.key;
        var usrInputCode = usrInput.charCodeAt(0);
        if ( 97 <= usrInputCode && usrInputCode <= 122)
            {
                var result = playGuess(usrInput);
                var msg = "";
                lives += result;
                if (result == 1) {msg = "YOU GUESSED CORRECTLY";}
                else if (result == 0) {msg = "Key has already been pressed";}
                else {msg = "you guess.... poorly";}
                document.getElementById("notification").innerHTML = msg;        
            }
    }


//----------------------------------FUNCTIONS----------------------------------


function pickNewWord ()                                                             //// pickNewWord reasigns the var word to unused word from library
    {                                                                               //
        while (usedWords.indexOf(word) != -1)                                       // while the word has been used before (is in usedWords)
            {words = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];}  // = pick randoom word from library
        usedWords.push(word);                                                       // add the word to usedWords (outside of while loop)
    }

function playGuess (userGuess)                                                      //// Plas takes a char, and returns a bool stating if the 
    {                                                                               //// guess was correct
        if (lettersGuessed.indexOf(userGuess) == -1)                                // check if that key has already been pressed before
            {                                                                       //
                lettersGuessed.push(userGuess);                                     // if key not pressed before, add it to list of keys pressed
                if (word.indexOf(userGuess) != -1)                                  // |    if key found within word
                    {                                                               // |    |
                        for(i=0; i<wordObj.length; i++)                             // |    | go through each letter of word
                            {                                                       // |    |
                                if (wordObj[i][1] == userGuess)                     // |    | find all instances of the letter guessed correctly
                                    {wordObj[i][0] = 1;}                            // |    | and mark the letter as found
                            }                                                       // |    |
                        document.getElementById(userGuess).style.color = "green";   // |    | change letter color to green
                        updateWordText();                                           // |    | update html page to show locations of correctly guessed letter
                        return 1;                                                   // |    + return 1 (guessed correctly)
                    }                                                               // |    |
                document.getElementById(userGuess).style.color = "red";             // |    | change letter color to red
                return -1;                                                          // |    |
            }                                                                       // |    - return -1 (guessed incorrectly)
        return 0;                                                                   // = return 0 (letter already guessed)
    }

    
function updateWordText()
    {
        var result = "";
        for(i=0; i< wordObj.length; i++)
            {
                if (wordObj[i][0])
                    {result += wordObj[i][1];}
                else
                    {result += "-";}
                document.getElementById("word").innerHTML = result;
            }
        
    }