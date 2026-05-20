// Using ONLY querySelector/querySelectorAll, no getElementById:

// Change h1 text to your name
let h1El = document.querySelector("#title")
h1El.textContent = "Qwerty World"

// Change button text to "Clicked!" when clicked
let btnEl = document.querySelector("#btn")


// Add class highlight to ALL paragraphs
let paraEls = document.querySelectorAll(".text")
paraEls.forEach(para => {
    para.classList.add("highlight")
});

// Toggle hidden class on #box every time button is clicked
let boxEl = document.querySelector("#box")
btnEl.addEventListener("click", function () {
    boxEl.classList.toggle("hidden")
    btnEl.textContent = "Clicked"
})

// Create a new <p> that says "I was created by JavaScript!" and append it to body
let newPara = document.createElement("p")
newPara.textContent = "I was created by JavaScript"

let bodyEl = document.querySelector("body")
bodyEl.appendChild(newPara)
