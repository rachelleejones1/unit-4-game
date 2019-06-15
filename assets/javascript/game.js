$(document).ready(function() {

    var randomNumber = Math.floor(Math.random() * 102) + 19;
    var yourScore = 0;

    var sapphire = Math.floor(Math.random() * 12) + 1;
    var diamond = Math.floor(Math.random() * 12) + 1;
    var amethyst = Math.floor(Math.random() * 12) + 1;
    var pinkGem = Math.floor(Math.random() * 12) +1;

    var winCounter = 0;
    var lossCounter = 0;

    function reset () {
        randomNumber = Math.floor(Math.random() * 102) + 19;
        sapphire = Math.floor(Math.random() * 12) + 1;
        diamond = Math.floor(Math.random() * 12) + 1;
        amethyst = Math.floor(Math.random() * 12) + 1;
        pinkGem = Math.floor(Math.random() * 12) + 1;
        yourScore = 0;
        document.getElementById("yourScore").innerHTML = yourScore;
        document.getElementById("randomNumber").innerHTML = randomNumber
    }
    console.log(randomNumber)
    console.log(sapphire);
    console.log(diamond);
    console.log(amethyst);
    console.log(pinkGem);

    document.getElementById("randomNumber").innerHTML = randomNumber
    

    $("#blue-sapphire").on("click", function () {
        yourScore += sapphire;
        scoreCheck();
    });

    $("#diamond").on("click", function () {
        yourScore += diamond;
        scoreCheck();
    });

    $("#amethyst").on("click", function () {
        yourScore += amethyst;
        scoreCheck();
    });

    $("#pink_gem2").on("click", function () {
        yourScore += pinkGem;
        scoreCheck();
    });
    
    function scoreCheck () {
        if (yourScore < randomNumber) {
            document.getElementById("yourScore").innerHTML = yourScore;
        } 
        else if (yourScore === randomNumber) {
            winCounter++;
            document.getElementById("winCounter").innerHTML = "Wins: " + winCounter;
            reset();
            //$("#winCounter").html("Wins: " + +=winCounter);
        }
        else {
            lossCounter++;
            document.getElementById("lossCounter").innerHTML = "Losses: " + lossCounter;
            reset();
        }
}

})

//Add click events to each of the gems 
//Add the random number to the HTML to display on the page