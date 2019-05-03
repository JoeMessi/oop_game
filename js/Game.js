/** Game class **/

 class Game {
   constructor() {
     // counter of wrong attempts
     this.missed = 0;

     // array of phrases
     this.phrases = [
       'Hello',
       'Dogs are nice',
       'cats are small',
       'Hello cats',
       'Hello dogs'
     ];

     // this property will hold the active phrase
     // it will be set to the instance of the Phrase class initialized with getRandomPhrase()
     this.activePhrase = null;
   }


   // this method will get started our game
   startGame() {
     // hides the starter overlay screen
     document.getElementById('overlay').style.display = 'none';

     // the activePhrase property will hold our instance of the
     // Phrase class initialized with getRandomPhrase()
     this.activePhrase = new Phrase(this.getRandomPhrase());

     //  adds the phrase to the board by calling the addPhraseToDisplay method
     this.activePhrase.addPhraseToDisplay();
   }


   // randomly retrieves one of the phrases stored in the phrases array and returns it.
   getRandomPhrase() {
     const random = Math.floor(Math.random() * 5 );
     return this.phrases[random];
   }


   // this method disables any clicked buttons on the onscreen keyboard
   // checks if the button clicked by the player matches a letter in the phrase
   handleInteraction(key) {
     // clicked button disabled
     key.disabled = true;
     // html collection of the letter lis
     let lis = document.getElementById('phrase').firstElementChild.children;
     // html collection to Array
     lis = Array.from(lis);
     // I map lis and get an array of only letters
     let mapped = lis.map(li => li.textContent);

     // we check if mapped includes the textContent of the clicked button
     // and assign the relevant class to it
     if(mapped.includes(key.textContent)) {

       key.classList.add('chosen');

       // this will reveal the matched letter/s in our phrase
       // by caling checkLetter which will call showMatchedLetter on the activePhrase.
       this.activePhrase.checkLetter(key.textContent);

       // every time we have a match we check if the user has won by calling the checkForWin method
       this.checkForWin();

     }else{
       key.classList.add('wrong');
       // the removeLife method is called every time the user guesses wrong
       this.removeLife();
     }
   }



   // method that removes a life from the scoreboard
   removeLife() {

     // html collection of the scoreboard hearts
     let images = document.querySelectorAll("[src='images/liveHeart.png']");

     // we remove the last heart
     images[images.length -1].setAttribute('src', 'images/lostHeart.png');

     // we increment the missed property by 1
     this.missed += 1;

     // If the player gets to five wrong guesses
     // we end the game by calling the gameOver method.
     if(this.missed === 5) {
       this.gameOver(false);
     }
   }


   // method that check if the player has won
   checkForWin() {

     // html collection of all letter lis with the 'letter' class
     const letterLis = document.querySelectorAll('.letter');

     // array I use for tracking
     let track = [];

     // we loop through letterLis and push to the 'track' array
     // all the lis that have a class of 'hide'
     for(let i = 0; i < letterLis.length; i++) {
       if(letterLis[i].classList.contains('hide')) {
         track.push(letterLis[i]);
       }
     }

     // if the 'track' array is empty it means that we don't have any hidden letters
     // in our phrase anymore which means the player has guessed them all and has won.
     if(track.length === 0) {
        this.gameOver(true);

     }
   }



   // the gameOver method ends the game
   // it takes one parameter, a boolian value will be passed as the argument.
   // if 'true' the player has won, if 'false' the player has lost.
   gameOver(winner) {

     // we show back the starter overlay screen, but with a different
     // 'className' depending on if the player has won or lost
     const overlay = document.getElementById('overlay');
     overlay.style.display = '';

     // we select the h1 of the overlay screen
     const h1 = overlay.getElementsByTagName('h1')[0];

     if(winner) {
       h1.textContent = 'you win';
       overlay.className = 'win';

     }else{
       h1.textContent = 'you lose';
       overlay.className = 'lose';
     }
     // when the game ends we set the missed property back to 0
     this.missed = 0;
   }


 }
