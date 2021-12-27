import {firstAnswerHolder, secondAnswerHolder, thirdAnswerHolder, fourthAnswerHolder, fifthAnswerHolder} from './index.js';

//Variable to sum true answers
let correctResults = 0;

/**
 * Function to check event target, based on check to apply result and finnly to remove event listener from all answers.
 * @param {} Event
 * @param {} tagGroup All available answers for question 
 * @param {} answerHolder - Field  to hold given answer 
 * @param {} questionNum - number of question in quiz
 */
function eventHandler(e, tagGroup, answerHolder, questionNum){

    let target = e.target;

    if(target.classList.contains('true')  && answerHolder.innerHTML == ""){

        target.style.backgroundColor = 'green';

        answerHolder.innerHTML  += `${questionNum} - ${target.innerHTML};`;

        answerHolder.setAttribute('class', 'true');

        correctResults += 1;

    } else

        if(!target.classList.contains('true') && answerHolder.innerHTML == ""){

        target.style.backgroundColor = 'red';

        answerHolder.innerHTML += `${questionNum} - ${target.innerHTML};`;

        answerHolder.setAttribute('class', 'true');

    }

    tagGroup.forEach(tag => {

            tag.style.cursor = 'not-allowed';
            
            tag.removeEventListener('click', eventHandler)

        })

    
    
        checkForAllQustionAnswered();

}
//Ckeck if game is ended and option to restart
let checkForAllQustionAnswered = () => {
    if(
        firstAnswerHolder.classList.contains(true) && 
        secondAnswerHolder.classList.contains(true) && 
        thirdAnswerHolder.classList.contains(true) && 
        fourthAnswerHolder.classList.contains(true) && 
        fifthAnswerHolder.classList.contains(true)
        )
        {

        let allEndMsgHolder = document.querySelector('.result');
        let endBaner = document.createElement('div');

        let endGameDiv = document.createElement('div');
        let textHolder = document.createElement('p');
        let resetBtn = document.createElement('div');

        resetBtn.setAttribute('id', 'resetBtn');
        resetBtn.innerHTML = "Start Again";
        textHolder.innerHTML = `Честито!!!<br> Завърши играта с ${correctResults} верни отговора!`; 
        
        endGameDiv.append(textHolder);
        endBaner.append(endGameDiv);
        endBaner.append(resetBtn);
        allEndMsgHolder.append(endBaner);
        
        let gameReset = document.querySelector("#resetBtn");
        gameReset.addEventListener('click', () => {
            location.reload();
        })
    };
}

export {
    correctResults,
    eventHandler,
    checkForAllQustionAnswered,
}