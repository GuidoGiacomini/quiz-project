const qcheckItem = document.querySelectorAll(".qCheckItem")
const questionNumberText  = document.querySelector(".questionNumberText")
const questionText = document.querySelector(".questionText")
const possibleAnswers = document.querySelector(".possibleAnswers")
const correctAnswer = document.getElementById("correctAnswer")
const wrongAnswer = document.querySelectorAll(".wrongAnswer")
const nextButton = document.querySelector(".nextButton")
const restartButton = document.querySelector(".restartButton")

let didUserAnswer = false
let qCounter = 0
let wrongAnswerCounter = 0
let correctAnswerCounter = 0
restartButton.style.display = "none"

correctAnswer.addEventListener("click",()=>{
    if(didUserAnswer == false){
    correctAnswerCounter++
    correctAnswer.style.backgroundColor = "rgba(106, 219, 106, 0.767)"
    qcheckItem.forEach((item, index)=>{
        if(index == qCounter){
            item.style.backgroundColor = "lightgreen"
        }})
    didUserAnswer = true
    }
})

wrongAnswer.forEach(answer=>{
    answer.addEventListener("click",()=>{
        if(didUserAnswer == false){
        wrongAnswerCounter++
        answer.style.backgroundColor = "rgb(250, 102, 102)"
        qcheckItem.forEach((item, index)=>{
            if(index == qCounter){
                item.style.backgroundColor = "rgb(250, 102, 102)"
            }
        })
        didUserAnswer = true
        }
    })
})

let noProgress = true

nextButton.addEventListener("click",()=>{
    if(didUserAnswer == true){
    possibleAnswers.innerHTML = ''
    questionText.textContent =  ''
    qCounter++
    didUserAnswer = false
    noProgress = true
    nextQuestion(qCounter)
    }else if(didUserAnswer == false && noProgress == true){
        let errorMsg = document.createElement("p")
        errorMsg.innerText = "Choose an answer."
        errorMsg.style.color = "red"
        errorMsg.style.backgroundColor = "transparent"
        possibleAnswers.appendChild(errorMsg)
        noProgress = false
    }
    
})

restartButton.addEventListener("click",()=>{
    location.reload()
})


const giveFunctionality =()=>{
        const correctAnswer = document.getElementById("correctAnswer")
        const wrongAnswer = document.querySelectorAll(".wrongAnswer")
        correctAnswer.addEventListener("click",()=>{
            if(didUserAnswer == false){
            correctAnswerCounter++
            correctAnswer.style.backgroundColor = "rgba(106, 219, 106, 0.767)"
            qcheckItem.forEach((item, index)=>{
                if(index == qCounter){
                    item.style.backgroundColor = "lightgreen"
                }})
            didUserAnswer = true
            }
        })
        
        wrongAnswer.forEach(answer=>{
            answer.addEventListener("click",()=>{
                if(didUserAnswer == false){
                wrongAnswerCounter++
                answer.style.backgroundColor = "rgb(250, 102, 102)"
                qcheckItem.forEach((item, index)=>{
                    if(index == qCounter){
                        item.style.backgroundColor = "rgb(250, 102, 102)"
                    }
                })
                didUserAnswer = true
                }
            })
        })
}

const nextQuestion = (qNumber) =>{
    switch(qNumber){
        case 1: 
        questionNumberText.textContent = `Question Number 2`
        questionText.textContent = "What is the name of our galaxy?"
        possibleAnswers.innerHTML = `
                <p class="wrongAnswer">A) Andromeda</p>
                <p id="correctAnswer">B) Milky Way </p>
                <p class="wrongAnswer">C) Triangulum</p>
                <p class="wrongAnswer">D) Whirlpool</p>
                <p class="wrongAnswer">E) Sombrero</p>
                                    `
        giveFunctionality()
        break;

        case 2: 
        questionNumberText.textContent = `Question Number 3`
        questionText.textContent = "What is the estimated age of the universe?"
        possibleAnswers.innerHTML = `
                <p class="wrongAnswer">A) 4.5 billion years</p>
                <p class="wrongAnswer">B) 10.5 billion years</p>
                <p id="correctAnswer">C) 13.8 billion years</p>
                <p class="wrongAnswer">D) 20 billion years</p>
                <p class="wrongAnswer">E) 50 billion years</p>
                                    `
        giveFunctionality()                               
        break;

        case 3: 
        questionNumberText.textContent = `Question Number 4`
        questionText.textContent = "Which theory explains the origin of the universe?"
        possibleAnswers.innerHTML = `
                <p class="wrongAnswer">A) Steady State Theory</p>
                <p id="correctAnswer">B) Big Bang Theory</p>
                <p class="wrongAnswer">C) Oscillating Universe Theory</p>
                <p class="wrongAnswer">D) Plasma Universe Theory</p>
                <p class="wrongAnswer">E) Inflation Theory</p>
                                    `
        giveFunctionality()
        break;

        case 4: 
        questionNumberText.textContent = `Question Number 5`
        questionText.textContent = "What is the term for a massive explosion that occurs when a star dies?"
        possibleAnswers.innerHTML = `
                <p id="correctAnswer">A) Supernova</p>
                <p class="wrongAnswer">B) Black Hole</p>
                <p class="wrongAnswer">C) Nebula</p>
                <p class="wrongAnswer">D) Quasar</p>
                <p class="wrongAnswer">E) Pulsar</p>
                                    `
        giveFunctionality()
        break;

        case 5: 
        questionNumberText.textContent = `Question Number 6`
        questionText.textContent = "What is a light-year?"
        possibleAnswers.innerHTML = `
                <p class="wrongAnswer">A) The distance light travels in one month</p>
                <p id="correctAnswer">B) The distance light travels in one year</p>
                <p class="wrongAnswer">C) The time it takes for light to travel to the Moon</p>
                <p class="wrongAnswer">D) The time it takes for light to travel to the Sun</p>
                <p class="wrongAnswer">E) The distance light travels in one day</p>
                                    `
        giveFunctionality()
        break;

        case 6: 
        questionNumberText.textContent = `Question Number 7`
        questionText.textContent = "What is the largest type of star in the universe?"
        possibleAnswers.innerHTML = `
                <p class="wrongAnswer">A) Red Dwarf</p>
                <p class="wrongAnswer">B) White Dwarf</p>
                <p class="wrongAnswer">C) Neutron Star</p>
                <p id="correctAnswer">D) Supergiant</p>
                <p class="wrongAnswer">E) Main Sequence Star</p>
                                    `
        giveFunctionality()
        break;

        case 7: 
        questionNumberText.textContent = `Question Number 8`
        questionText.textContent = "What is a black hole?"
        possibleAnswers.innerHTML = `
                <p class="wrongAnswer">A) A hole in space</p>
                <p id="correctAnswer">B) A region of space where gravity is so strong that not even light can escape</p>
                <p class="wrongAnswer">C) A type of star</p>
                <p class="wrongAnswer">D) A large asteroid</p>
                <p class="wrongAnswer">E) A planet with no light</p>
                                    `
        giveFunctionality()
        break;

        case 8: 
        questionNumberText.textContent = `Question Number 9`
        questionText.textContent = "Which of these is the closest star to Earth, after the Sun?"
        possibleAnswers.innerHTML = `
                <p class="wrongAnswer">A) Betelgeuse</p>
                <p class="wrongAnswer">B) Sirius</p>
                <p id="correctAnswer">C) Proxima Centauri </p>
                <p class="wrongAnswer">D) Alpha Centauri</p>
                <p class="wrongAnswer">E) Vega</p>
                                    `
        giveFunctionality()
        break;

        case 9: 
        questionNumberText.textContent = `Question Number 10`
        questionText.textContent = "What is dark matter?"
        possibleAnswers.innerHTML = `
                <p class="wrongAnswer">A) Matter that emits light</p>
                <p class="wrongAnswer">B) Matter that reflects light</p>
                <p id="correctAnswer">C) Matter that does not interact with electromagnetic forces</p>
                <p class="wrongAnswer">D) Matter that is found only in black holes</p>
                <p class="wrongAnswer">E) Matter that only exists in the Sun</p>
                                    `
        giveFunctionality()
        break;

        default: 
        questionNumberText.textContent = `Congrats!`
        questionText.textContent = "You've finished the quiz!"
        let score = `<h4> Your score was: ${correctAnswerCounter} out of 10</h4>`
        // possibleAnswers.innerHTML = `<h4> Your score was: ${correctAnswerCounter} out of 10</h4>`
        if(correctAnswerCounter <= 3){
            possibleAnswers.innerHTML = `<h4> Your score was: ${correctAnswerCounter} out of 10</h4>
                                         <h4> You've earned the title of: Space Noob</h4>
                                        `
        }else if(correctAnswerCounter > 3 && correctAnswerCounter <= 6){
            possibleAnswers.innerHTML = `<h4> Your score was: ${correctAnswerCounter} out of 10</h4>
                                         <h4> You've earned the title of: Space Connoisseur</h4>
                                        `
        }else if(correctAnswerCounter > 6 && correctAnswerCounter <= 8){
            possibleAnswers.innerHTML = `<h4> Your score was: ${correctAnswerCounter} out of 10</h4>
                                         <h4> You've earned the title of: Space Master</h4>
                                        `
        }else if(correctAnswerCounter > 8 && correctAnswerCounter <= 10){
            possibleAnswers.innerHTML = `<h4> Your score was: ${correctAnswerCounter} out of 10</h4>
                                         <h4> You've earned the title of: Space Wizard</h4>
                                        `
        }
        nextButton.style.display = "none"
        restartButton.style.display = "flex"
    }
}