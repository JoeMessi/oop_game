/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


//start game button
document.getElementById('btn__reset').addEventListener('click', () => {

// when game start, reset everything

  // all keys html collection
  const keyboard = document.getElementById('qwerty');
  const keys = keyboard.getElementsByTagName('button');

  // ul of letters lis to be removed at the start if any
  const ul = document.getElementById('phrase').firstElementChild;

  while(ul.firstElementChild){
    ul.removeChild(ul.firstElementChild);
  }


  // onscreen keyboard keys
  for(let i = 0; i < keys.length; i ++) {
    keys[i].disabled = false;
    keys[i].className = '';
    keys[i].className = 'key';
  }



  // reset the hearts
  const scoreboard = document.getElementById('scoreboard');
  const hearts = scoreboard.getElementsByTagName('img');

  for(let i = 0; i < hearts.length; i ++) {
    hearts[i].removeAttribute('src');
    hearts[i].setAttribute('src', 'images/liveHeart.png');
  }




  const game = new Game();

  game.startGame();



  document.getElementById('qwerty').addEventListener('click', function(e) {

    if(e.target.tagName.toLowerCase() === 'button') {
      game.handleInteraction(e.target);
    }

  });


});
