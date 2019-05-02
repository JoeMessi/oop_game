/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor() {
     // counter
     this.missed = 0;
     // array of phrases
     this.phrases = [
       'Hello',
       'Dogs are nice',
       'cats are small',
       'Hello cats',
       'Hello dogs'
     ];

     // the active phrase, with startGame() this will be set to the phrase ogj returned from getRandomPhrase()
     this.activePhrase = null;
     this.winner = null;
   }

   startGame() {
     // hides the start screen overlay
     document.getElementById('overlay').style.display = 'none';

     // sets the activePhrase property with the chosen phrase
     this.activePhrase = new Phrase(this.getRandomPhrase());

     //  adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
     this.activePhrase.addPhraseToDisplay();



   }

   getRandomPhrase() {
     // randomly retrieves one of the phrases stored in the phrases array and returns it.
     const random = Math.floor(Math.random() * 5 );
     return this.phrases[random];
   }



   handleInteraction(key) {
     /*this method controls most of the game logic*/
    //  It checks to see if the button clicked by the player matches a letter in the phrase
    key.disabled = true;

    let lis = document.getElementById('phrase').firstElementChild.children;
    lis = Array.from(lis);
    let mapped = lis.map(li => li.textContent);


    if(mapped.includes(key.textContent)) {
        key.classList.add('chosen');
        // :::::::::::::::::::::::::::::::::::::::::::::
        this.activePhrase.checkLetter(key.textContent);
         this.checkForWin();
        // If the player has won the game, also call the gameOver() method.
    }else{
        key.classList.add('wrong');
        this.removeLife();
    }

   }


   removeLife() {
     // removes a life from the scoreboard

     // selects the scoreboard hearts - html collection
     let images = document.querySelectorAll("[src='images/liveHeart.png']");

     // remove last heart
     images[images.length -1].setAttribute('src', 'images/lostHeart.png');

     // increments the missed property
     // console.log(`missed is at: ${this.missed}`);
     this.missed += 1;
     console.log(this.missed);

     // If the player has five missed guesses
     // end the game by calling the gameOver() method.
     if(this.missed === 5) {
       this.winner = false;
       this.gameOver();
     }
   }



   checkForWin() {

   const letterLis = document.querySelectorAll('.letter');
   let track = [];

   for(let i = 0; i < letterLis.length; i++) {
     if(letterLis[i].classList.contains('hide')) {
      track.push(letterLis[i]);
     }
   }

   if(track.length === 0) {
      //console.log('winner');
      this.winner = true;
      this.gameOver();

   }

   }



   gameOver() {
     // shows the start screen overlay
     const overlay = document.getElementById('overlay');
     overlay.style.display = '';
     overlay.classList.remove('start');

     const h1 = overlay.getElementsByTagName('h1')[0];

     if(this.winner) {
       h1.textContent = 'you win';
       overlay.classList.add('win');

     }else{
       h1.textContent = 'you lose';
       overlay.classList.add('lose');
     }

     this.missed = 0;

   }















 }
