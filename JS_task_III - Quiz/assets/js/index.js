var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}

//Variable to hold true answers.
let correctResults = 0;
//First question group-------------------------------------------------------------
//Function to execute event results in case of corect/incorect answer - first question.
let corectEventResult = () => {
    firstCorrectAnswer.style.background = 'green';
        firstGroup.forEach(div => {
       div.style.cursor = 'not-allowed'; 
    });
    correctResults += 1;

    firstCorrectAnswer.removeEventListener('click', corectEventResult);

    firstWrongAnswerFirstGroup.removeEventListener('click', firstWrongEventResult);
    secondWrongAnswerFirstGroup.removeEventListener('click', secondWrongEventResult);
    thirdWrongAnswerFirstGroup.removeEventListener('click', thirdWrongEventResult);

    firstAnswerHolder.innerHTML = `1 - ${firstCorrectAnswer.innerHTML};`;
    checkForAllQustionAnswered();
}
let firstWrongEventResult = () => {
    firstGroup.forEach(div => {
        div.style.background = 'red';
        div.style.cursor = 'not-allowed'; 
    });
   
    firstCorrectAnswer.removeEventListener('click', corectEventResult);
    secondWrongAnswerFirstGroup.removeEventListener('click', secondWrongEventResult);
    thirdWrongAnswerFirstGroup.removeEventListener('click', thirdWrongEventResult);

    firstAnswerHolder.innerHTML = `1 - ${firstWrongAnswerFirstGroup.innerHTML};`;
    checkForAllQustionAnswered();
}
let secondWrongEventResult = () => {
    firstGroup.forEach(div => {
        div.style.background = 'red';
        div.style.cursor = 'not-allowed'; 
    });
    
    firstCorrectAnswer.removeEventListener('click', corectEventResult);
    firstWrongAnswerFirstGroup.removeEventListener('click', firstWrongEventResult);
    thirdWrongAnswerFirstGroup.removeEventListener('click', thirdWrongEventResult);

    firstAnswerHolder.innerHTML = `1 - ${secondWrongAnswerFirstGroup.innerHTML};`;
    checkForAllQustionAnswered();
}
let thirdWrongEventResult = () => {
    firstGroup.forEach(div => {
        div.style.background = 'red';
        div.style.cursor = 'not-allowed'; 
    });
   
    firstCorrectAnswer.removeEventListener('click', corectEventResult);
    firstWrongAnswerFirstGroup.removeEventListener('click', firstWrongEventResult);
    secondWrongAnswerFirstGroup.removeEventListener('click', secondWrongEventResult);

    firstAnswerHolder.innerHTML = `1 - ${thirdWrongAnswerFirstGroup.innerHTML};`;
    checkForAllQustionAnswered();
}
//Variables holding HTML elements of first question.
const firstCorrectAnswer = document.querySelector('body > main > div > div:first-child > div.true');
const firstWrongAnswerFirstGroup = document.querySelector('body > main > div > div > div.text + div');
const secondWrongAnswerFirstGroup = document.querySelector('body > main > div > div > div.text + div + div');
const thirdWrongAnswerFirstGroup = document.querySelector('body > main > div > div > div:last-child');
const firstGroup = document.querySelectorAll('body > main > div > div:first-child > div.btn');
const firstAnswerHolder = document.querySelector('.result > div > div.first');

//First question adding eventListeners for execute event on question group elements.
firstCorrectAnswer.addEventListener('click', corectEventResult);
firstWrongAnswerFirstGroup.addEventListener('click', firstWrongEventResult);
secondWrongAnswerFirstGroup.addEventListener('click', secondWrongEventResult);
thirdWrongAnswerFirstGroup.addEventListener('click', thirdWrongEventResult);

//Second qustion group------------------------------------------------------------
//Function to execute event results in case of corect/incorect answer - second question.
let corectEventResultSecond = () => {
    secondCorrectAnswer.style.background = 'green';
    SecondGroup.forEach(div => {
       div.style.cursor = 'not-allowed'; 
    });
    correctResults += 1;

    secondCorrectAnswer.removeEventListener('click', corectEventResultSecond);
    firstWrongAnswerSecondGroup.removeEventListener('click', firstWrongEventResultSecond);
    secondWrongAnswerSecondGroup.removeEventListener('click', secondWrongEventResultSecond);
    thirdWrongAnswerSecondGroup.removeEventListener('click', thirdWrongEventResultSecond);

    secondAnswerHolder.innerHTML = `2 - ${secondCorrectAnswer.innerHTML};`;
    checkForAllQustionAnswered();
}
let firstWrongEventResultSecond = () => {
    SecondGroup.forEach(div => {
        div.style.background = 'red';
        div.style.cursor = 'not-allowed'; 
    });
    
    secondCorrectAnswer.removeEventListener('click', corectEventResultSecond);
    secondWrongAnswerSecondGroup.removeEventListener('click', secondWrongEventResultSecond);
    thirdWrongAnswerSecondGroup.removeEventListener('click', thirdWrongEventResultSecond);

    secondAnswerHolder.innerHTML = `2 - ${firstWrongAnswerSecondGroup.innerHTML};`;
    checkForAllQustionAnswered();
}
let secondWrongEventResultSecond = () => {
    SecondGroup.forEach(div => {
        div.style.background = 'red';
        div.style.cursor = 'not-allowed'; 
     });
    
     secondCorrectAnswer.removeEventListener('click', corectEventResultSecond);
     firstWrongAnswerSecondGroup.removeEventListener('click', firstWrongEventResultSecond);
     thirdWrongAnswerSecondGroup.removeEventListener('click', thirdWrongEventResultSecond);

     secondAnswerHolder.innerHTML = `2 - ${secondWrongAnswerSecondGroup.innerHTML};`;
     checkForAllQustionAnswered();
  }
let thirdWrongEventResultSecond = () => {
    SecondGroup.forEach(div => {
        div.style.background = 'red';
        div.style.cursor = 'not-allowed'; 
    });
  
    secondCorrectAnswer.removeEventListener('click', corectEventResultSecond);
    firstWrongAnswerSecondGroup.removeEventListener('click', firstWrongEventResultSecond);
    secondWrongAnswerSecondGroup.removeEventListener('click', secondWrongEventResultSecond);

    secondAnswerHolder.innerHTML = `2 - ${thirdWrongAnswerSecondGroup.innerHTML};`;
    checkForAllQustionAnswered();
}
//Variables holding HTML elements of second question.
const secondCorrectAnswer = document.querySelector('body > main > div > div:first-child + div > div.true');
const firstWrongAnswerSecondGroup = document.querySelector('body > main > div > div:first-child + div > div.text + div');
const secondWrongAnswerSecondGroup = document.querySelector('body > main > div > div:first-child + div > div.text + div + div');
const thirdWrongAnswerSecondGroup = document.querySelector('body > main > div > div:first-child + div > div:last-child');
const SecondGroup = document.querySelectorAll('body > main > div > div:first-child + div > div.btn');
const secondAnswerHolder = document.querySelector('.result > div > div.second');

//Second question adding eventListeners for execute event on question group elements.
secondCorrectAnswer.addEventListener('click', corectEventResultSecond);
firstWrongAnswerSecondGroup.addEventListener('click', firstWrongEventResultSecond);
secondWrongAnswerSecondGroup.addEventListener('click', secondWrongEventResultSecond);
thirdWrongAnswerSecondGroup.addEventListener('click', thirdWrongEventResultSecond);

//Third qustion group-----------------------------------------------------------------
//Function to execute event results in case of corect/incorect answer - third question.
let corectEventResultThird = () => {
    thirdCorrectAnswer.style.background = 'green';
    thirdGroup.forEach(div => {
       div.style.cursor = 'not-allowed'; 
    });
    correctResults += 1;

    thirdCorrectAnswer.removeEventListener('click', corectEventResultThird);
    firstWrongAnswerThirdGroup.removeEventListener('click', firstWrongEventResultThird);
    secondWrongAnswerThirdGroup.removeEventListener('click', secondWrongEventResultThird);
    thirdWrongAnswerThirdGroup.removeEventListener('click', thirdWrongEventResultThird);

    thirdAnswerHolder.innerHTML = `3 - ${thirdCorrectAnswer.innerHTML};`;
    checkForAllQustionAnswered();
}
let firstWrongEventResultThird = () => {
    thirdGroup.forEach(div => {
        div.style.background = 'red';
        div.style.cursor = 'not-allowed'; 
    });
    
    thirdCorrectAnswer.removeEventListener('click', corectEventResultThird);
    secondWrongAnswerThirdGroup.removeEventListener('click', secondWrongEventResultThird);
    thirdWrongAnswerThirdGroup.removeEventListener('click', thirdWrongEventResultThird);

    thirdAnswerHolder.innerHTML = `3 - ${firstWrongAnswerThirdGroup.innerHTML};`;
    checkForAllQustionAnswered();
}
let secondWrongEventResultThird = () => {
    thirdGroup.forEach(div => {
        div.style.background = 'red';
        div.style.cursor = 'not-allowed'; 
    });
   
    thirdCorrectAnswer.removeEventListener('click', corectEventResultThird);
    firstWrongAnswerThirdGroup.removeEventListener('click', firstWrongEventResultThird);
    thirdWrongAnswerThirdGroup.removeEventListener('click', thirdWrongEventResultThird);

    thirdAnswerHolder.innerHTML = `3 - ${secondWrongAnswerThirdGroup.innerHTML};`;
    checkForAllQustionAnswered();
}
let thirdWrongEventResultThird = () => {
    thirdGroup.forEach(div => {
        div.style.background = 'red';
        div.style.cursor = 'not-allowed'; 
    });
 
    thirdCorrectAnswer.removeEventListener('click', corectEventResultThird);
    firstWrongAnswerThirdGroup.removeEventListener('click', firstWrongEventResultThird);
    secondWrongAnswerThirdGroup.removeEventListener('click', secondWrongEventResultThird);

    thirdAnswerHolder.innerHTML = `3 - ${thirdWrongAnswerThirdGroup.innerHTML};`;
    checkForAllQustionAnswered();
}

//Variables holding HTML elements of third question.
const thirdCorrectAnswer = document.querySelector('body > main > div > div:first-child + div + div > div.true');
const firstWrongAnswerThirdGroup = document.querySelector('body > main > div > div:first-child + div + div > div.text + div');
const secondWrongAnswerThirdGroup = document.querySelector('body > main > div > div:first-child + div + div > div.text + div + div');
const thirdWrongAnswerThirdGroup = document.querySelector('body > main > div > div:first-child + div + div > div.text + div + div + div');
const thirdGroup = document.querySelectorAll('body > main > div > div:first-child + div + div > div.btn');
const thirdAnswerHolder = document.querySelector('.result > div > div.third');

//Third question adding eventListeners for execute event on question group elements.
thirdCorrectAnswer.addEventListener('click', corectEventResultThird);
firstWrongAnswerThirdGroup.addEventListener('click', firstWrongEventResultThird);
secondWrongAnswerThirdGroup.addEventListener('click', secondWrongEventResultThird);
thirdWrongAnswerThirdGroup.addEventListener('click', thirdWrongEventResultThird);

//Fourth qustion group-----------------------------------------------------------------
//Function to execute event results in case of corect/incorect answer - fourth question.
let corectEventResultFourth = () => {
    fourthCorrectAnswer.style.background = 'green';
    fourthGroup.forEach(div => {
       div.style.cursor = 'not-allowed'; 
    });
    correctResults += 1;

    fourthCorrectAnswer.removeEventListener('click', corectEventResultFourth);
    firstWrongAnswerFourthGroup.removeEventListener('click', firstWrongEventResultFourth);
    secondWrongAnswerFourthGroup.removeEventListener('click', secondWrongEventResultFourth);
    thirdWrongAnswerFourthGroup.removeEventListener('click', thirdWrongEventResultFourth);

    fourthAnswerHolder.innerHTML = `4 - ${fourthCorrectAnswer.innerHTML};`;
    checkForAllQustionAnswered();
}
let firstWrongEventResultFourth = () => {
    fourthGroup.forEach(div => {
        div.style.background = 'red';
        div.style.cursor = 'not-allowed'; 
    });
 
    fourthCorrectAnswer.removeEventListener('click', corectEventResultFourth);
    secondWrongAnswerFourthGroup.removeEventListener('click', secondWrongEventResultFourth);
    thirdWrongAnswerFourthGroup.removeEventListener('click', thirdWrongEventResultFourth); 

    fourthAnswerHolder.innerHTML = `4 - ${firstWrongAnswerFourthGroup.innerHTML};`;
    checkForAllQustionAnswered();
}
let secondWrongEventResultFourth = () => {
    fourthGroup.forEach(div => {
        div.style.background = 'red';
        div.style.cursor = 'not-allowed'; 
    });

    fourthCorrectAnswer.removeEventListener('click', corectEventResultFourth);
    firstWrongAnswerFourthGroup.removeEventListener('click', firstWrongEventResultFourth);
    thirdWrongAnswerFourthGroup.removeEventListener('click', thirdWrongEventResultFourth);

    fourthAnswerHolder.innerHTML = `4 - ${secondWrongAnswerFourthGroup.innerHTML};`;
    checkForAllQustionAnswered();
}
let thirdWrongEventResultFourth = () => {
    fourthGroup.forEach(div => {
        div.style.background = 'red';
        div.style.cursor = 'not-allowed'; 
    });

    fourthCorrectAnswer.removeEventListener('click', corectEventResultFourth);
    firstWrongAnswerFourthGroup.removeEventListener('click', firstWrongEventResultFourth);
    secondWrongAnswerFourthGroup.removeEventListener('click', secondWrongEventResultFourth);

    fourthAnswerHolder.innerHTML = `4 - ${thirdWrongAnswerFourthGroup.innerHTML};`;
    checkForAllQustionAnswered();
}
//Variables holding HTML elements of fourth question.
const fourthCorrectAnswer = document.querySelector('body > main > div > div:first-child + div + div + div > div.true');
const firstWrongAnswerFourthGroup = document.querySelector('body > main > div > div:first-child + div + div + div > div.text + div');
const secondWrongAnswerFourthGroup = document.querySelector('body > main > div > div:first-child + div + div + div > div.text + div + div');
const thirdWrongAnswerFourthGroup = document.querySelector('body > main > div > div:first-child + div + div + div > div.text + div + div + div');
const fourthGroup = document.querySelectorAll('body > main > div > div:first-child + div + div + div > div.btn');
const fourthAnswerHolder = document.querySelector('.result > div > div.fourth');

//Fourth question adding eventListeners for execute event on question group elements.
fourthCorrectAnswer.addEventListener('click', corectEventResultFourth);
firstWrongAnswerFourthGroup.addEventListener('click', firstWrongEventResultFourth);
secondWrongAnswerFourthGroup.addEventListener('click', secondWrongEventResultFourth);
thirdWrongAnswerFourthGroup.addEventListener('click', thirdWrongEventResultFourth);

//Fifth qustion group-----------------------------------------------------------------
//Function to execute event results in case of corect/incorect answer - fifth question.
let corectEventResultFifth = () => {
    fifthCorrectAnswer.style.background = 'green';
    fifthGroup.forEach(div => {
       div.style.cursor = 'not-allowed'; 
    });
    correctResults += 1;

    fifthCorrectAnswer.removeEventListener('click', corectEventResultFifth);
    firstWrongAnswerFifthGroup.removeEventListener('click', firstWrongEventResultFifth);
    secondWrongAnswerFifthGroup.removeEventListener('click', secondWrongEventResultFifth);
    thirdWrongAnswerFifthGroup.removeEventListener('click', thirdWrongEventResultFifth);

    fifthAnswerHolder.innerHTML = `5 - ${fifthCorrectAnswer.innerHTML};`;
    checkForAllQustionAnswered();
}
let firstWrongEventResultFifth = () => {
    fifthGroup.forEach(div => {
        div.style.background = 'red';
        div.style.cursor = 'not-allowed'; 
    });
    
    fifthCorrectAnswer.removeEventListener('click', corectEventResultFifth);
    secondWrongAnswerFifthGroup.removeEventListener('click', secondWrongEventResultFifth);
    thirdWrongAnswerFifthGroup.removeEventListener('click', thirdWrongEventResultFifth); 

    fifthAnswerHolder.innerHTML = `5 - ${firstWrongAnswerFifthGroup.innerHTML};`;
    checkForAllQustionAnswered();
}
let secondWrongEventResultFifth = () => {
    fifthGroup.forEach(div => {
        div.style.background = 'red';
        div.style.cursor = 'not-allowed'; 
    });
    
    fifthCorrectAnswer.removeEventListener('click', corectEventResultFifth);
    firstWrongAnswerFifthGroup.removeEventListener('click', firstWrongEventResultFifth);
    thirdWrongAnswerFifthGroup.removeEventListener('click', thirdWrongEventResultFifth);
    
    fifthAnswerHolder.innerHTML = `5 - ${secondWrongAnswerFifthGroup.innerHTML};`;
    checkForAllQustionAnswered();
}
let thirdWrongEventResultFifth = () => {
    fifthGroup.forEach(div => {
        div.style.background = 'red';
        div.style.cursor = 'not-allowed'; 
    });
    
    fifthCorrectAnswer.removeEventListener('click', corectEventResultFifth);
    firstWrongAnswerFifthGroup.removeEventListener('click', firstWrongEventResultFifth);
    secondWrongAnswerFifthGroup.removeEventListener('click', secondWrongEventResultFifth);

    fifthAnswerHolder.innerHTML = `5 - ${thirdWrongAnswerFifthGroup.innerHTML};`;
    checkForAllQustionAnswered();
}
//Variables holding HTML elements of fifth question.
const fifthCorrectAnswer = document.querySelector('body > main > div > div:first-child + div + div + div + div > div.true');
const firstWrongAnswerFifthGroup = document.querySelector('body > main > div > div:first-child + div + div + div + div > div.text + div + div');
const secondWrongAnswerFifthGroup = document.querySelector('body > main > div > div:first-child + div + div + div + div > div.text + div + div + div');
const thirdWrongAnswerFifthGroup = document.querySelector('body > main > div > div:first-child + div + div + div + div > div.text + div + div + div + div');
const fifthGroup = document.querySelectorAll('body > main > div > div:first-child + div + div + div + div > div.btn');
const fifthAnswerHolder = document.querySelector('.result > div >div.fifth');

//Fifith question adding eventListeners for execute event on question group elements.
fifthCorrectAnswer.addEventListener('click', corectEventResultFifth);
firstWrongAnswerFifthGroup.addEventListener('click', firstWrongEventResultFifth);
secondWrongAnswerFifthGroup.addEventListener('click', secondWrongEventResultFifth);
thirdWrongAnswerFifthGroup.addEventListener('click', thirdWrongEventResultFifth);

//Function to check if all qustions are answored, and givind option for restart of quiz.
let checkForAllQustionAnswered = () => {
        if(
            firstAnswerHolder.innerHTML !== '' && 
            secondAnswerHolder.innerHTML !== '' && 
            thirdAnswerHolder.innerHTML !== '' && 
            fourthAnswerHolder.innerHTML !== '' && 
            fifthAnswerHolder.innerHTML !== ''
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
        return allEndMsgHolder;
}