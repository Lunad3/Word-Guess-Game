console.log("in game.js and running")

var wordLibrary = 
    [
        "hang","rude","shape","average","good","numerous","suffer",
        "stuff","unusual","excited","surround","produce","grab",
        "exclusive","hope","eggs","lackadasical","door","heavy","flame",
        "vengeful","battle","pig","impolite","coil","vessel","parched",
        "bump","scale","bright","misty","prepare","zealous","hospitable",
        "rightful","spotted","pump","wrap","knife"
    ];

var alreadySelected = [];

while (alreadySelected.length < wordLibrary.length)
    {
        var word = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];          //
        while (alreadySelected.indexOf(word) != -1)                                      //
            {                                                                            // select new random word from library
                var word = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];  //
            }                                                                            //
        alreadySelected.push(word);

        var wordObj = [];                                                                //
        for (i=0; i<word.length; i++)                                                    // array of letters and 1/0 : 1 = show, 0 = dont show(default)
            {wordObj.push([0,word[i]]);}                                                 // ex.  [[0,"p"],[1,"e"],[0,"t"]] = "-e-"
        console.log("testing Display Word for :" + word);
        displayWord();
        
        var lettersGuessed = [];
        var guessesLeft = 10;
        var word_guessed = false;
        // while ((guessesLeft > 0) || (word_guessed))                                       // while player has guesses left or has not guessed the word
        //     {
        //         document.onkeyup = function(event)                                        // wait for player to press a key
        //             {
        //                 var userGuess = event.key;
        //                 if (lettersGuessed.indexOf(userGuess) == -1)                      // check if that key has already been pressed before
        //                     {
        //                         lettersGuessed.push(userGuess);                           // if key not pressed before, add it to list of keys pressed
        //                         if (word.indexOf(userGuess) != -1)                        // |    if key found within word
        //                             {                                                     // |    |
        //                                 for(i=0; i<wordObj.length; i++)                   // |    | go through each letter of word
        //                                     {                                             // |    |
        //                                         if (wordObj[i][1] == userGuess)           // |    | find all instances of the letter guessed correctly
        //                                             {wordObj[i][0] = 1;}                  // |    | and mark the letter as found
        //                                     }                                             // |    |
        //                                 displayWord();                                    // |    | update html page to show locations of correctly guessed letter
        //                             }                                                     // |    |
        //                         else {guessesLeft--;}                                     // |    =if key not found, subtract a guess
        //                     }                                                             // |
        //                 else {console.log("already guessed that letter");}                // =if key pressed before [***FIND OUT WHAT TO DO***]
        //             }
        //     }
        
        function displayWord()
            {
                console.log("in DisplayWORD:");
                var result = "";
                for(i=0; i< wordObj.length; i++)
                    {
                        if (wordObj[i][0])
                            {result += wordObj[i][1];}
                        else
                            {result += "-";}
                    }
                console.log(result);
            }

    }
