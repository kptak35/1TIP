const money = document.querySelector("#money")
const time = document.querySelector("#time")
const rate = document.querySelector("#rate")
const count = document.querySelector("#count")
const result1 = document.querySelector("#result")
const result2 = document.querySelector("#result2")




count.addEventListener("click", (e)=>{

    let calosc = Number(money.value) * (Number(rate.value) / (time.value/12)) + Number(money.value)

    result1.innerHTML = calosc.toFixed(2)

    let rata = calosc / Number(time.value)

    result2.innerHTML = rata.toFixed(2)


})