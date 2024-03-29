window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var word ;              // Selected word
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'
  var guessMode = true;

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var guessButton = document.getElementById("guess");
  guessButton.click();


  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "Category: Colors";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "Category: US States";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "Category: Cities";
    }
  }

  // Create geusses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
   comments = function () {
    showLives.innerHTML = "Lives: " + lives;
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

      // Animate man
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }

  var animate9 = function () {
    drawArray[9]();
  }

  var animate8 = function () {
    drawArray[9]();
    drawArray[8]();
  }

  var animate7 = function () {
    drawArray[9]();
    drawArray[8]();
    drawArray[7]();
  }

  var animate6 = function () {
    drawArray[9]();
    drawArray[8]();
    drawArray[7]();
    drawArray[6]();
  }

  var animate5 = function () {
    drawArray[9]();
    drawArray[8]();
    drawArray[7]();
    drawArray[6]();
    drawArray[5]();
  }

  var animate4 = function () {
    drawArray[9]();
    drawArray[8]();
    drawArray[7]();
    drawArray[6]();
    drawArray[5]();
    drawArray[4]();
  }

  var animate3 = function () {
    drawArray[9]();
    drawArray[8]();
    drawArray[7]();
    drawArray[6]();
    drawArray[5]();
    drawArray[4]();
    drawArray[3]();
  }

  var animate2 = function () {
    drawArray[9]();
    drawArray[8]();
    drawArray[7]();
    drawArray[6]();
    drawArray[5]();
    drawArray[4]();
    drawArray[3]();
    drawArray[2]();
  }

  var animate1 = function () {
    drawArray[9]();
    drawArray[8]();
    drawArray[7]();
    drawArray[6]();
    drawArray[5]();
    drawArray[4]();
    drawArray[3]();
    drawArray[2]();
    drawArray[1]();
  }

  var animate0 = function () {
    drawArray[9]();
    drawArray[8]();
    drawArray[7]();
    drawArray[6]();
    drawArray[5]();
    drawArray[4]();
    drawArray[3]();
    drawArray[2]();
    drawArray[1]();
    drawArray[0]();
  }


   // Hangman
  canvas =  function(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }

  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
}

   frame1 = function() {
     draw (0, 150, 150, 150);
   };

   frame2 = function() {
     draw (10, 0, 10, 600);
   };

   frame3 = function() {
     draw (0, 5, 70, 5);
   };

   frame4 = function() {
     draw (60, 5, 60, 15);
   };

   torso = function() {
     draw (60, 36, 60, 70);
   };

   rightArm = function() {
     draw (60, 46, 100, 50);
   };

   leftArm = function() {
     draw (60, 46, 20, 50);
   };

   rightLeg = function() {
     draw (60, 70, 100, 100);
   };

   leftLeg = function() {
     draw (60, 70, 20, 100);
   };

  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];


  // OnClick Function
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        }
      }
      var j = (word.indexOf(geuss));
      if(guessMode){ //normal mode
          if (j === -1) {
            lives -= 1;
            comments();
            animate();
          } else {
            comments();
          }
      } else { //answer mode
          if (j === -1) { //answer wrong
              //currently works! draw full stickman and
            lives = 0;
            comments();
            for (var i = 0; i < 10; i++){
              lives = i;
              animate();
            }

          } else {
            lives += 1;
            var currentLives = lives;
            comments();
            context.clearRect(0, 0, 400, 400);
            if(currentLives == 0){ animate0();
            } else if(currentLives == 1){ animate1();
            } else if(currentLives == 2){ animate2();
            } else if(currentLives == 3){ animate3();
            } else if(currentLives == 4){ animate4();
            } else if(currentLives == 5){ animate5();
            } else if(currentLives == 6){ animate6();
            } else if(currentLives == 7){ animate7();
            } else if(currentLives == 8){ animate8();
            } else if(currentLives == 9){ animate9();
            }

          }
      }
    }
  }


  // Play
  play = function () {
    categories = [
        ["pink","purple","maroon","green","black","white","periwinkle","orange","yellow",
        "magenta","mint","aquamarine","lavender","scarlet","cerulean","violet","indigo"],

        ["alabama","alaska", "arizona", "arkansas", "california", "colorado",
        "connecticut", "delaware", "florida", "georgia", "hawaii",
        "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana",
        "maine", "maryland", "massachusetts", "michigan", "minnesota",
        "mississippi", "missouri", "montana", "nebraska","nevada", "new hampshire",
        "new jersey", "new mexico", "new york", "north carolina", "north dakota",
        "ohio", "oklahoma", "oregon", "pennsylvania", "rhode island",
        "south carolina", "south dakota", "tennessee", "texas", "utah", "vermont",
        "virginia", "washington", "west virginia", "wisconsin", "wyoming"],

        ["manchester", "milan", "madrid", "amsterdam", "prague","london",
        "pittsburgh","atlanta","london","berlin","barcelona","athens","venice",
        "budapest","copenhagen","stockholm"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();


   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    context.clearRect(0, 0, 400, 400);
    play();
  }

    document.getElementById('guess').onclick = function() {
    guessMode = true;
  }

      document.getElementById('answer').onclick = function() {
    guessMode = false;
  }

  $('button').on('click', function(){
    $('button').removeClass('selected');
    $(this).addClass('selected');
});


}