// When user types in input → show what they typed in #output
let searchEl = document.querySelector("#search")
let outputEl = document.querySelector("#output")
searchEl.addEventListener("input", function(event){
    outputEl.textContent = "You typed: " + searchEl.value;
})

// When user hovers over #box → change its background to steelblue
let boxEl = document.querySelector("#box")
boxEl.addEventListener("mouseover", function(event){
    boxEl.style.backgroundColor = "steelblue";
})

// When user moves mouse away from #box → change back to coral
boxEl.addEventListener("mouseout", function(event){
    boxEl.style.backgroundColor = "coral";
})

// When user scrolls → show scroll position in #scroll-msg
let scrollMsgEl = document.querySelector("#scroll-msg")
window.addEventListener("scroll", function(event){
    scrollMsgEl.textContent = "Scroll Position: " + window.scrollY
})

// When user presses Enter key anywhere → alert "You pressed Enter!"
document.addEventListener("keydown", function(event){
    if (event.key.toLowerCase() == "enter"){
        alert("You pressed Enter!")
    }
})
