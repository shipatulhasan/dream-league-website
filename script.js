
const ul = document.getElementById('items')

// select team member by click select button
const selections =  document.getElementsByClassName('select-player')
for(select of selections){
    select.addEventListener('click',function(event){
        const selectBtn = event.target
        const cardBody = event.target.parentNode
        const playerName = cardBody.querySelector('.title').innerText
        mySelection(playerName,selectBtn)

       
       
    })
}

// get input value in number

function getInput(id){
    const inputField = document.getElementById(id)
    const inputNumber = parseFloat(inputField.value)
    return inputNumber

}
// set value as inner text

function displayValue(id,value){
    const displayField = document.getElementById(id)
    displayField.innerText = value

}

// count child element

function counter(){
    const count = ul.childElementCount
    return count
}

function mySelection(name,select){
    const selectBtn = select
    const count = counter()

    // disabled btn
    selectBtn.setAttribute('disabled',true)
    selectBtn.className = 'bg-gray-300 py-2'
    const playerName = name

    // validation 

    if(count >= 5){
        alert('you can\'t add more then five players')
        selectBtn.removeAttribute('disabled')
        selectBtn.className='bg-blue-600 py-2 text-slate-100'
        return 
    }
// show selected players
    const li = document.createElement('li')
    li.innerText = playerName
    ul.appendChild(li)
}


document.getElementById('btn-calculate').addEventListener('click',function(){
    calculation()
})

function calculation(){
    const budgetForPlayer = getInput('budget-per-player')
    const numberOfPlayers = counter()

    const playerExpenses = budgetForPlayer * numberOfPlayers
    displayValue('player-expense-display',playerExpenses)

}
