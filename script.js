
let saveEl = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
let count = 0
    
console.log(saveEl)



    function increment() {
        count += 1
        countEL.textContent = count
    }

    function save() {
        let countStr = count + " - "
        saveEl.textContent += countStr
        countEL.textContent = 0
        count = 0
    }
    


let welcomeEl = document.getElementById("welcome-el")

let name = "codewithvico"
let greetings = "Welcome back "

welcomeEl.innerText = greetings + name 

console.log()
welcomeEl.innerText +=  ","


