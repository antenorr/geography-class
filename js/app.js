 'use strict';
function welcome1() { $('.blackBoard').html("<span>Ready for a pop quiz?</span>") };
function welcome2() { $('.blackBoard').html("<span>Answer all my questions</span>") };
function welcome3() { $('.blackBoard').html("<span>Win S\"cool\" points!</span>") };
function readyQuestion() { 
    $('.blackBoard').html("<span>Are you Ready?</span><button id='ready'>&nbsp;Click me!</button>" ) 
    document.getElementById('ready').addEventListener('click', () => {
    $('.blackBoard').html("") 
    quiz()
    });

};
//function clearWelcome() { $('.blackBoard').html("") };
welcomeMessage();
//run WelcomeMessage - an introduction run for the  app.
function welcomeMessage (){
    setTimeout (
        welcome1, 100
    );
    setTimeout (
        welcome2, 1500
    );
    setTimeout (
        welcome3, 3000
    );
    setTimeout (
        readyQuestion, 4000
    )
    // setTimeout (
    //     quiz, 4500
    // )
}
let questionBase;

function quiz() {
    let count = 0;
    let points = 0;
    let questionSpace = document.getElementsByClassName('blackBoard')[0];//field holding questions
    let userAnswers = document.getElementById('answerField');// where the user types his answer
    let coolPoints = document.getElementById('coolPoints');// point counter
    let answerConfirmation = document.getElementById('answerConfirmation');

    let allStates = [], // these arrays holding property values of questions
	    allCapitals = [],
	    allImages = [];           

        for (let s = 0, c = 0, i = 0 ; i < states.length; s++, c++, i++) {
            allStates.push(Object.values(states[s])[0] ) ;
            allCapitals.push(Object.values(states[c])[1] ) ;
            allImages.push(Object.values(states[i])[2] ) ;
        } // end for-loop bracket

/**
 * the question builder function  was implemented to function as a function 
 * calling itself repeatedly ---PROBLEM >>> attempting to stop a loop 
 * before the next iteration takes place - for this reason the below
 * function was created
 */
    questionBuilder();
        function questionBuilder() {
            questionBase = `What is the capital of ${stateName()}?`;
                function stateName() {
                return allStates[count];
                }
            questionSpace.innerHTML = questionBase;
            questionChecker();
    /**
     * Incomplete below >> discover way to implement an else alternative that deducts points and corrects the wrong answer given
     */
        function questionChecker() {
            document.getElementById('submitButton').addEventListener('click', function () {
                if ( userAnswers.value.toLowerCase() === Object.values(states[count])[1].toLowerCase() ) {
                    answerConfirmation.innerHTML = `Correct ! ${Object.values(states[count])[1]} `;
                    count++;
                    points++;  
                    userAnswers.value = '';
                }
                
                coolPoints.textContent = points;  
                questionBuilder();
               
            });//end button eventlistener
        }//end question Checker;
    }//end questionBuilder function


}// end quit

/**
 * this code to be implemented in the future 
 * a countdown that will help with gamification
 * 
 *     // let countDown = function() {    
    //        var n = 4;
    //             setTimeout(countDown,1000);
    //             function countDown(){
    //             n--;
    //             if(n > 0){
    //                 setTimeout(countDown,1000);
    //             }//end if
    //             document.getElementById('countDown').innerHTML = n;
                
    //         }//end countdown inner
    // }//end countdown declaration
 * 
 */