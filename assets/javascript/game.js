
//---------------------TESTING AREA-------------------------------------------


//---------------------------------Game Setup---------------------------------
var wordLibrary = 
    [
        "hang","rude",
        // "shape","average","good","numerous","suffer",
        // "stuff","unusual","excited","surround","produce","grab",
        // "exclusive","hope","eggs","lackadasical","door","heavy","flame",
        // "vengeful","battle","pig","impolite","coil","vessel","parched",
        // "bump","scale","bright","misty","prepare","zealous","hospitable",
        // "rightful","spotted","pump","wrap","knife"
    ];
var score = 0;
var usedWords = [];
var lettersGuessed = [];
var word_guessed = false;

var word = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
usedWords.push(word);
var wordObj = [];
for (i=0; i<word.length; i++)                                               // array of letters and 1/0 : 1 = show, 0 = dont show(default)
    {wordObj.push([0,word[i]]);}                                            // ex.  [[0,"p"],[1,"e"],[0,"t"]] = "-e-"
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
                if (result == 1)
                    {
                        msg = "YOU GUESSED CORRECTLY";
                        if (word_guessed)
                            {
                                score++;
                                document.getElementById("score").innerHTML = "Words Guessed Correctly: " + score + "/" + wordLibrary.length;
                                resetGame();
                            }
                    }
                else if (result == 0) {msg = "Key has already been pressed";}
                else 
                    {
                        lives--;
                        msg = "you guess.... poorly";
                        if (lives == 0)
                            {resetGame();}
                    }
                document.getElementById("notification").innerHTML = msg;
                document.getElementById("lives").innerHTML = "lives Left : " + lives.toString();
            }
    }


//----------------------------------FUNCTIONS----------------------------------


function pickNewWord ()                                                             //// pickNewWord reasigns the var word to unused word from library
    {                                                                               //
        while (usedWords.indexOf(word) != -1)                                       // while the word has been used before (is in usedWords)
            {word = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];}  // = pick randoom word from library
        usedWords.push(word);                                                       // add the word to usedWords (outside of while loop)
        wordObj = []                                                                // reset wordObj so no conflicts with prev wordObj
        for (i=0; i<word.length; i++)                                               // array of letters and 1/0 : 1 = show, 0 = dont show(default)
            {wordObj.push([0,word[i]]);}                                            // ex.  [[0,"p"],[1,"e"],[0,"t"]] = "-e-"
        updateWordText();
    }

function playGuess (userGuess)                                                      //// Plas takes a char, and returns a bool stating if the 
    {                                                                               //// guess was correct
        if (lettersGuessed.indexOf(userGuess) == -1)                                // check if that key has already been pressed before
            {                                                                       //
                lettersGuessed.push(userGuess);                                     // if key not pressed before, add it to list of keys pressed
                if (word.indexOf(userGuess) != -1)                                  // +    if key found within word
                    {                                                               // |    |
                        var letters_found = 0;
                        for(i=0; i<wordObj.length; i++)                             // |    | go through each letter of word
                            {                                                       // |    |
                                if (wordObj[i][0])
                                    {letters_found++;}
                                else if (wordObj[i][1] == userGuess)                // |    | find all instances of the letter guessed correctly
                                    {
                                        letters_found++;
                                        wordObj[i][0] = 1;
                                    }                                               // |    | and mark the letter as found
                            }                                                       // |    |
                        if (letters_found == wordObj.length)
                            {word_guessed = true;}
                        document.getElementById(userGuess).style.color = "green";   // |    | change letter color to green
                        updateWordText();                                           // |    | update html page to show locations of correctly guessed letter
                        return 1;                                                   // |    + return 1 (guessed correctly)
                    }                                                               // |    |
                document.getElementById(userGuess).style.color = "red";             // |    | change letter color to red
                return -1;                                                          // |    |
            }                                                                       // |    - return -1 (guessed incorrectly)
        return 0;                                                                   // - return 0 (letter already guessed)
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

    function resetGame()
        {
            if (usedWords.length < wordLibrary.length)
                {
                    lives = 10;
                    pickNewWord();
                    word_guessed = false;
                    for (i=0; i<lettersGuessed.length; i++)
                        {document.getElementById(lettersGuessed[i]).style.color = "black";}
                    lettersGuessed = [];        
                }
            else
                {
                    document.getElementById("word").innerHTML = "YOUR SCORE IS: " + score + "/" + wordLibrary.length;
                    document.getElementById("notification").innerHTML = "";
                    document.getElementById("lives").innerHTML = "";
                    document.getElementById("score").innerHTML = "";
                    document.getElementById("prompt").innerHTML = "";
                }
        }
