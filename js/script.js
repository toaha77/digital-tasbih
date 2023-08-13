let sDisplay= document.getElementById('sDisplay')
let sBtnIncrement = document.getElementById('sBtnIncrement')
let sBtnDecrement = document.getElementById('sBtnDecrement')


let alhamduDisplay = document.getElementById('alhamduDisplay')
let alhamduBtnIncrement = document.getElementById('alhamduBtnIncrement')
let alhamduBtnDecrement = document.getElementById('alhamduBtnDecrement')


let aDisplay = document.getElementById('aDisplay')
let aBtnIncrement = document.getElementById('aBtnIncrement')
let aBtnDecrement = document.getElementById('aBtnDecrement')
let resetBtn = document.getElementById('resetBtn')
 
let subhanIntialValue = 0
let alhamduInitialValue = 0
let allahuInitialValue = 0

sBtnIncrement.addEventListener('click', function name(params) {
    if (subhanIntialValue == 33) {
        return alert("Subha'nallah Complete.")
    }
    subhanIntialValue += 1
    
    sDisplay.innerText = subhanIntialValue
})
sBtnDecrement.addEventListener('click', function name(params) {
    if (subhanIntialValue == 0) {
        return alert("You can't added negative value")
    }
    subhanIntialValue -=1
    sDisplay.innerText = subhanIntialValue
})
alhamduBtnIncrement.addEventListener('click', function name(params) {
    if (alhamduInitialValue == 33) {
        return alert("Subha'nallah Complete.")
    }
    alhamduInitialValue += 1
    
    alhamduDisplay.innerText = alhamduInitialValue
})
alhamduBtnDecrement.addEventListener('click', function name(params) {
    if (alhamduInitialValue == 0) {
        return alert("You can't added negative value")
    }
    alhamduInitialValue -=1
    alhamduDisplay.innerText = alhamduInitialValue
})
 
aBtnIncrement.addEventListener('click', function name(params) {
    if (allahuInitialValue == 34) {
        return alert("Allahu-akbar Complete.")
    }
    allahuInitialValue += 1
    
    aDisplay.innerText = allahuInitialValue
})
aBtnDecrement.addEventListener('click', function name(params) {
    if (allahuInitialValue == 0) {
        return alert("You can't added negative value")
    }
    alhamduInitialValue -=1
    aDisplay.innerText = allahuInitialValue
})
 

resetBtn.addEventListener('click', function name(params) {
    sDisplay.innerText = 0
    alhamduDisplay.innerText = 0
    aDisplay.innerText = 0
    subhanIntialValue = 0
    alhamduInitialValue =0
    allahuInitialValue = 0
})

