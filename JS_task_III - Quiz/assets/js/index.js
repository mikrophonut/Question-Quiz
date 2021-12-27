import {  eventHandler, checkForAllQustionAnswered,} from './eventFunctions.js';

//First question group-------------------------------------------------------------
//Variables holding elements of first question.
const firstCorrectAnswer = document.querySelector('body > main > div > div:first-child > div.true');
const firstWrongAnswerFirstGroup = document.querySelector('body > main > div > div > div.text + div');
const secondWrongAnswerFirstGroup = document.querySelector('body > main > div > div > div.text + div + div');
const thirdWrongAnswerFirstGroup = document.querySelector('body > main > div > div > div:last-child');
const firstGroup = document.querySelectorAll('body > main > div > div:first-child > div.btn');
const firstAnswerHolder = document.querySelector('.result > div > div.first');

//Second qustion group------------------------------------------------------------
//Variables holding elements of second question.
const secondCorrectAnswer = document.querySelector('body > main > div > div:first-child + div > div.true');
const firstWrongAnswerSecondGroup = document.querySelector('body > main > div > div:first-child + div > div.text + div');
const secondWrongAnswerSecondGroup = document.querySelector('body > main > div > div:first-child + div > div.text + div + div');
const thirdWrongAnswerSecondGroup = document.querySelector('body > main > div > div:first-child + div > div:last-child');
const secondGroup = document.querySelectorAll('body > main > div > div:first-child + div > div.btn');
const secondAnswerHolder = document.querySelector('.result > div > div.second');

//Third qustion group-----------------------------------------------------------------
//Variables holding elements of third question.
const thirdCorrectAnswer = document.querySelector('body > main > div > div:first-child + div + div > div.true');
const firstWrongAnswerThirdGroup = document.querySelector('body > main > div > div:first-child + div + div > div.text + div');
const secondWrongAnswerThirdGroup = document.querySelector('body > main > div > div:first-child + div + div > div.text + div + div');
const thirdWrongAnswerThirdGroup = document.querySelector('body > main > div > div:first-child + div + div > div.text + div + div + div');
const thirdGroup = document.querySelectorAll('body > main > div > div:first-child + div + div > div.btn');
const thirdAnswerHolder = document.querySelector('.result > div > div.third');

//Fourth qustion group-----------------------------------------------------------------
//Variables holding elements of forth question.
const fourthCorrectAnswer = document.querySelector('body > main > div > div:first-child + div + div + div > div.true');
const firstWrongAnswerFourthGroup = document.querySelector('body > main > div > div:first-child + div + div + div > div.text + div');
const secondWrongAnswerFourthGroup = document.querySelector('body > main > div > div:first-child + div + div + div > div.text + div + div');
const thirdWrongAnswerFourthGroup = document.querySelector('body > main > div > div:first-child + div + div + div > div.text + div + div + div');
const fourthGroup = document.querySelectorAll('body > main > div > div:first-child + div + div + div > div.btn');
const fourthAnswerHolder = document.querySelector('.result > div > div.fourth');

//Fifth qustion group-----------------------------------------------------------------
//Variables holding elements of forth question.
const fifthCorrectAnswer = document.querySelector('body > main > div > div:first-child + div + div + div + div > div.true');
const firstWrongAnswerFifthGroup = document.querySelector('body > main > div > div:first-child + div + div + div + div > div.text + div + div');
const secondWrongAnswerFifthGroup = document.querySelector('body > main > div > div:first-child + div + div + div + div > div.text + div + div + div');
const thirdWrongAnswerFifthGroup = document.querySelector('body > main > div > div:first-child + div + div + div + div > div.text + div + div + div + div');
const fifthGroup = document.querySelectorAll('body > main > div > div:first-child + div + div + div + div > div.btn');
const fifthAnswerHolder = document.querySelector('.result > div >div.fifth');


//First question adding eventListeners for execute event on question group elements.
firstCorrectAnswer.addEventListener('click', (e) => {
    eventHandler(e, firstGroup, firstAnswerHolder, 1);
});
firstWrongAnswerFirstGroup.addEventListener('click', (e) => {
    eventHandler(e, firstGroup, firstAnswerHolder, 1);
});    
secondWrongAnswerFirstGroup.addEventListener('click', (e) => {
    eventHandler(e, firstGroup, firstAnswerHolder, 1);
});
thirdWrongAnswerFirstGroup.addEventListener('click', (e) => {
    eventHandler(e, firstGroup, firstAnswerHolder, 1);
});


//Second question adding eventListeners for execute event on question group elements.
secondCorrectAnswer.addEventListener('click', (e) => {
   eventHandler(e, secondGroup, secondAnswerHolder, 2);
});
firstWrongAnswerSecondGroup.addEventListener('click', (e) => {
    eventHandler(e, secondGroup, secondAnswerHolder, 2);
});
secondWrongAnswerSecondGroup.addEventListener('click', (e) => {
    eventHandler(e, secondGroup, secondAnswerHolder, 2);
});
thirdWrongAnswerSecondGroup.addEventListener('click', (e) => {
    eventHandler(e, secondGroup, secondAnswerHolder, 2);
});

//Third question adding eventListeners for execute event on question group elements.
thirdCorrectAnswer.addEventListener('click', (e)=> {
    eventHandler(e, thirdGroup, thirdAnswerHolder, 3);
});
firstWrongAnswerThirdGroup.addEventListener('click', (e) => {
    eventHandler(e, thirdGroup, thirdAnswerHolder, 3);
});
secondWrongAnswerThirdGroup.addEventListener('click', (e) => {
    eventHandler(e, thirdGroup, thirdAnswerHolder, 3);
});
thirdWrongAnswerThirdGroup.addEventListener('click', (e) => {
    eventHandler(e, thirdGroup, thirdAnswerHolder, 3);
});

//Fourth question adding eventListeners for execute event on question group elements.
fourthCorrectAnswer.addEventListener('click', (e) => {
    eventHandler(e, fourthGroup, fourthAnswerHolder, 4);
});
firstWrongAnswerFourthGroup.addEventListener('click', (e) => {
    eventHandler(e, fourthGroup, fourthAnswerHolder, 4);
});
secondWrongAnswerFourthGroup.addEventListener('click', (e) => {
    eventHandler(e, fourthGroup, fourthAnswerHolder, 4);
});
thirdWrongAnswerFourthGroup.addEventListener('click', (e) => {
    eventHandler(e, fourthGroup, fourthAnswerHolder, 4);
});

//Fifth question adding eventListeners for execute event on question group elements.
fifthCorrectAnswer.addEventListener('click', (e) => {
    eventHandler(e, fifthGroup, fifthAnswerHolder, 5);
});
firstWrongAnswerFifthGroup.addEventListener('click', (e) => {
    eventHandler(e, fifthGroup, fifthAnswerHolder, 5);
});
secondWrongAnswerFifthGroup.addEventListener('click', (e) => {
    eventHandler(e, fifthGroup, fifthAnswerHolder, 5);
});
thirdWrongAnswerFifthGroup.addEventListener('click', (e) => {
    eventHandler(e, fifthGroup, fifthAnswerHolder, 5);
});


export {
    firstAnswerHolder,
    secondAnswerHolder,
    thirdAnswerHolder, 
    fourthAnswerHolder,
    fifthAnswerHolder,  
}