// variable that will hold the 'Game' class instance
let game;

// selects the parent div of the onscreen keyboard
const keyboard = document.getElementById('qwerty');
// html collection of all buttons of the onscreen keyboard
const keys = keyboard.getElementsByTagName('button');

// selects the scoreboard div
const scoreboard = document.getElementById('scoreboard');
// html collection of the heart images
const hearts = scoreboard.getElementsByTagName('img');

// selects the ul of the phrase letters lis
const ul = document.getElementById('phrase').firstElementChild;

// array of keys that have been pressed already
let pressedKeys = [];


// we add a 'click' event listener on the 'start game' button
// when the button is clicked we reset some elements
document.getElementById('btn__reset').addEventListener('click', () => {

  // we remove all lis inside the ul
  while(ul.firstElementChild){
    ul.removeChild(ul.firstElementChild);
  }

  // we reset the buttons keys of the onscreen keyboard
  for(let i = 0; i < keys.length; i ++) {
    keys[i].disabled = false;
    keys[i].className = '';
    keys[i].className = 'key';
  }

  // we reset the hearts images by setting their 'src' attribute back to 'images/liveHeart.png'
  for(let i = 0; i < hearts.length; i ++) {
    hearts[i].removeAttribute('src');
    hearts[i].setAttribute('src', 'images/liveHeart.png');
  }

  // we empy the array of keys that have been pressed already
  pressedKeys = [];


  // we initialize the 'Game' class instace
  game = new Game();
  // we call the 'startGame' method on the game instace
  game.startGame();

});


// we add a 'click' event listener on the '#qwerty' div,
// parent of all buttons inside the onscreen keyboard
document.getElementById('qwerty').addEventListener('click', function(e) {

// when a button is clicked we call the 'handleInteraction' method of
// the 'game' instance passing the actual targeted button as argument
  if(e.target.tagName.toLowerCase() === 'button') {
    game.handleInteraction(e.target);
  }
});


// we give users the chance to use their real keyboard
// by adding a 'keydown' event listener on the document
document.addEventListener('keydown', (event) => {
  // selects the key just pressed
  const keyPressed = event.key.toLowerCase();

   // if the key pressed is included in the array of key already pressed
   // we don't react on it
   if(pressedKeys.includes(keyPressed)) {
     return false;
   }else{

     // we call handleInteraction() on the onscreen button
     // whose textContent matched the key just pressed
     for(let button of keys) {
       if(button.textContent === keyPressed) {
         game.handleInteraction(button);

         // and we push that key to the array of keyPressed   
         pressedKeys.push(keyPressed);
       }
     }
   }

});
