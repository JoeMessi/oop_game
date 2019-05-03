/** Phrase class **/

 class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }


   // method that adds letter placeholders on the page
   addPhraseToDisplay() {

     // splits our phrase into an array of sigle letters
     const letters = this.phrase.split('');
     // selects the ul where each letter will be appended as a li
     const ul = document.getElementById('phrase').firstElementChild;

     // we sort each letter into a li, give it the relevant className and push it to the ul
     letters.forEach((char) => {
       const li = document.createElement('li');
        li.textContent = char;
       if(char !== ' ') {
         li.className = `hide letter ${char}`;
       }else{
         li.className = `hide space`;
       }
       ul.append(li);
     });
   }


   // this method will check if the letter selected by the player
   // matches a letter in the phrase.
   // the argument of the 'key' parameter will be the event.targeted button of the click event listener
   // on all keys of the onscreen keyboard
   checkLetter(key) {

     // html collection of all the lis letters in the phrase
     const lis = document.getElementById('phrase').firstElementChild.children;
       // we loop through all lis and compare each li.textContent with the key clicked
       for(let i = 0; i < lis.length; i++) {
         if(lis[i].textContent === key) {
           // if a match is found we call the showMatchedLetter method on the li
           this.showMatchedLetter(lis[i]);
         }
       }
     }


    // this method removes 'hide' and adds 'show' as a class on the li passed as argument
    showMatchedLetter(letter) {
      letter.classList.remove('hide');
      letter.classList.add('show');
    }

 }
