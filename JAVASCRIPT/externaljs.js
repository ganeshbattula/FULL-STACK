let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

redDiv.onclick = () => console.log('red')
yellowDiv.onclick = () => console.log('yellow')
greenDiv.onclick = () => console.log('green')

const buttons = document.querySelectorAll('.colorbutton')
//console.log(buttons)


//forEach
timesclicked = {'red':0, 'yellow':0, 'green':0}
buttons.forEach(button => {
  button.onclick = () =>{
    timesclicked[button.value] +=1
    button.innerText = timesclicked[button.value]
      //console.log(button.value)
  }
}
)

function clearscoes(){
  timesclicked.red = 0
  timesclicked.yellow = 0
  timesclicked.green = 0
  buttons.forEach(button => {
    button.innerHTML= ''
  })
}
const cleargamediv = document.getElementById('cleargame')
cleargamediv.onclick = () => clearscoes()