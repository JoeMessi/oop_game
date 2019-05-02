/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase) {

     this.phrase = phrase.toLowerCase();
   }

   // adds letter placeholder in the page when the game starts
   addPhraseToDisplay() {

     // splits our phrase into sigle letters
     const letters = this.phrase.split('');
     // selects the ul
     const ul = document.getElementById('phrase').firstElementChild;
     // we sort each letter into a li, give it the relevant className and push it to the ul
     letters.forEach((char) => {
       const li = document.createElement('li');
        li.textContent = char;
       if(char !== ' ') {
         li.className = `hide letter ${char}`;
       }else{
         li.className = 'hide space';
       }
       ul.append(li);
     });
   }



   checkLetter(key) {
     // checks to see if the letter selected by the player
     // matches a letter in the phrase.
     // the key parameter will be the e.target argument when call on the click event listener

     // html collection of the created letters lis
     const lis = document.getElementById('phrase').firstElementChild.children;
       // loop over lis and compare with 'key'
       for(let i = 0; i < lis.length; i++) {
         if(lis[i].textContent === key) {
           this.showMatchedLetter(lis[i]);
         }
       }
     }

    // shows the letter/s
    showMatchedLetter(letter) {
      letter.classList.remove ('hide');
      letter.classList.add ('show');
    }


 }
