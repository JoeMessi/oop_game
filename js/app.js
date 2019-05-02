/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game();

const phrase = new Phrase(game.getRandomPhrase());

game.startGame(phrase);



// start game button
// document.getElementById('btn__reset').addEventListener('click', () => {
//
//
//
// });









const keyboard = document.getElementById('qwerty');
const keys = keyboard.getElementsByTagName('button');

// adds click on button keys
for(let i = 0; i < keys.length; i ++) {
  keys[i].addEventListener('click', (e) => {

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  // phrase.checkLetter(e.target.textContent);

   game.handleInteraction(e.target);
   //console.log(e.target.textContent);



  });
}
