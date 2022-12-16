const buttons = document.querySelectorAll(".rating__button")

const removeBack = () => {
    buttons.forEach((i) => {
        i.classList.remove("background")
    })
}

const addBack = (e) => {
    removeBack()
    e.target.classList.add("background")
}

buttons.forEach((i) => {
    i.addEventListener("click", addBack)
})

////////////////////////////////////////////////////////////////

const allButton = document.querySelector(".rating__buttons")
const submit = document.querySelector(".rating__submit")
const thankState = document.querySelector("#thank__state")
const rateState = document.querySelector("#rate__state")
const span = document.querySelector("#selected")

allButton.addEventListener("click", (e) => {
    value = e.target.innerText
    if (value > 0 || value >= 5) {
        span.innerText = value
        console.log(value)
        submit.addEventListener("click", (e) => {
            rateState.style.display = "none"
            thankState.style.display = "flex"
            e.preventDefault()
        })
        e.preventDefault()
    }
})

//////////////////////////////////////////////////////////////