let firstCard = 5
let secondCard = 10
let sum = firstCard + secondCard
let sumEl = document.getElementById("sum-el")
let isAlive = true
let hasBlackJack = false
let messageEl = document.getElementById("message-el")
let message = ""

sumEl.textContent = "Sum: " +  sum


function renderGame()
{
    sumEl.textContent = "Sum: " +  sum
    if (sum < 21)
    {
        message = "Do you want to draw a new card"
    }
    else if (sum === 21)
    {
        message = "You have got the black jack"
    }
    else
    {
        message = "You are out of the game"
    }
    messageEl.textContent = message
}