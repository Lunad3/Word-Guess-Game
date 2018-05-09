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

while (alreadySelected.length != wordLibrary.length)
    {
        var i = wordLibrary[Math.floor(Math.random * wordLibrary.length)];            //
        while (alreadySelected.indexOf(i) != -1)                                      //
            {                                                                         // select new random word from library
                var i = wordLibrary[Math.floor(Math.random * wordLibrary.length)];    //
            }                                                                         //
        
        var word = [];
        for (l=0 ;l<wordLibrary[i].length ;l++)
            {word[l] = 0;}
        
        
    }
