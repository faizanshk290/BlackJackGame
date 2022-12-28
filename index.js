let sum = 0
let cards = []
let sumEl = document.getElementById("sum-el")
let isAlive = false
let hasBlackJack = false
let messageEl = document.getElementById("message-el")
let message = ""
let cardEl = document.getElementById("card-el")


function generateRandomNumber()
{
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10)
    {
        return 10
    }
    else if (randomNumber === 1)
    {
        return 11
    }
    return randomNumber
}
function renderGame()
{
    sumEl.textContent = "Sum: " +  sum
    cardEl.textContent = "Cards: "
    for(let i = 0 ; i < cards.length ; i++)
    {
        cardEl.textContent += cards[i] + " "
    }
    if (sum < 21)
    {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21)
    {
        message = "You have got the black jack press start to play again"
        hasBlackJack = true
    }
    else
    {
        message = "You are out of the game press start to play again"
        isAlive = false
    }
    messageEl.textContent = message
}
function startGame()
{
    isAlive = true
    hasBlackJack = false
    let firstCard = generateRandomNumber()
    let secondCard = generateRandomNumber()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function newCard()
{
    if (isAlive === true && hasBlackJack === false)
    {
        let newCardNumber = generateRandomNumber()
        sum += newCardNumber
        cards.push(newCardNumber)
        renderGame()
    }
}