let timer = document.getElementById("timer");
let inputVal = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let quote = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let spinner = document.getElementById("spinner");
resetBtn.addEventListener("click", function() {
    let count = 0
    let uid = setInterval(function() {
        count += 1;
        timer.textContent = count.toString() + " seconds";
    }, 1000);
    inputVal.value = ""
    result.textContent = ""
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };
    spinner.classList.remove("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            console.log(jsonData);
            spinner.classList.add("d-none");
            quote.textContent = jsonData.content;
        })
})


let count = 0
let uid = setInterval(function() {
    count += 1;
    timer.textContent = count.toString() + " seconds";
}, 1000)

submitBtn.addEventListener("click", function(event) {
    event.preventDefault()
    if (quote.textContent === inputVal.value) {
        result.textContent = "You typed in " + timer.textContent;
        result.style.color = "green";
        clearInterval(uid);
    } else {
        result.textContent = "You typed in correct sentence"
        result.style.color = "red";
    }
})