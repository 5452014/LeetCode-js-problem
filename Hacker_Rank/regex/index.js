
const form=document.getElementById('form')
const inputVal=document.getElementById('input')
const output = document.querySelector("#output");

const regex=/^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/

const checkNumber=(mynum)=>{
const ok=regex.exec(mynum.value)
output.innerHTML=ok? `Thanks, your phone number is ${ok[0]}`
    : `${mynum.value} isn't a phone number with area code!`;
}


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    checkNumber(inputVal)
})