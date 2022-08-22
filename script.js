
const ul = document.getElementById('items')
const players = []

// select team member by click select button
const selections =  document.getElementsByClassName('select-player')
for(select of selections){
    select.addEventListener('click',function(event){
        const selectBtn = event.target
        const cardBody = event.target.parentNode
        const playerName = cardBody.querySelector('.title').innerText
        mySelection(playerName,selectBtn)

        const obj = {
            name:playerName,
            btn:selectBtn
        }
        players.push(obj) 

    })
}


// get input value in number

function getInput(id){
    const inputField = document.getElementById(id)
    const inputNumber = parseFloat(inputField.value)
    if(inputNumber < 0 || isNaN(inputNumber)){
        alert('please provide a valid input')
        return
    }
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

// ceate team

function mySelection(name,select){
    const selectBtn = select
    const count = counter()

    // disabled btn
    selectBtn.setAttribute('disabled',true)
    selectBtn.className = 'font-manrope font-bold bg-gray-300 py-2'
    const playerName = name

    // validation 

    if(count >= 5){
        alert('you can\'t add more then five players')
        selectBtn.removeAttribute('disabled')
        selectBtn.className = ('font-manrope font-bold py-2 bg-blue-600 text-slate-100 text-sm')
        return 
    }
// show selected players
    const li = document.createElement('li')

    li.innerHTML = `
    <div class=" flex items-center justify-between">
      ${playerName}
      <i class="fa-solid fa-xmark text-orange hover:cursor-pointer"onclick="vanish(event)"></i>
    </div>
  `
    ul.appendChild(li)
}

// player expenses 

document.getElementById('btn-calculate').addEventListener('click',function(){
    playerCost()
    
})

// total cost

document.getElementById('btn-total-calculate').addEventListener('click',function(){
    totalCost()
})


// player cost
function playerCost(){
    const budgetForPlayer = getInput('budget-per-player-field')
    const numberOfPlayers = counter()
    if(isNaN(budgetForPlayer)){
        return ''
    }
    const playerExpenses = parseFloat((budgetForPlayer * numberOfPlayers).toFixed(2))
    // display cost

    displayValue('player-expense-display',playerExpenses)
    return playerExpenses

}

// total cost calculate

function totalCost(){
    const playerExpenses = playerCost()
    const managerCost = getInput('manager-field')
    const coachCost = getInput('coach-field')

    if(isNaN(managerCost) || isNaN(coachCost)){
        return
    }
    const totalExpenses = playerExpenses + managerCost + coachCost
    const subTotal = parseFloat(totalExpenses.toFixed(2))
    

    displayValue('total-expense-display',subTotal)
    
}

// remove btn event

function vanish(event){
    const parent = event.target.parentNode.parentNode
    const title = parent.innerText
    for(const player of players){
        if(player.name===title){
            player.btn.removeAttribute('disabled')
            player.btn.className =('font-manrope font-bold py-2 bg-blue-600 text-slate-100 text-sm')
    }
}
ul.removeChild(parent)
}

