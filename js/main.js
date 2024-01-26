let elBoxes = document.querySelectorAll('.box')
let elLights = document.querySelectorAll('.lights')

let count = 0
setInterval(()=>{
  count = count + 1
  if(count == 10){
    count = 1
  }
  if(count >=1 && count <=3){
    fnRed()
    fnYashil()
  }
  if(count ==4 || count == 9){
    fnYellow()
    fnSariq()
  }
    if(count >=5 && count <=8){
      fnGreen()
      fnQizil()
    }
 }, 2000)

function fnRed() {
  elBoxes[0].classList.add('qizil')
  elBoxes[1].classList.remove('sariq')
  elBoxes[2].classList.remove( 'yashil')
}
function fnYellow() {
  elBoxes[0].classList.remove('qizil')
  elBoxes[1].classList.add('sariq')
  elBoxes[2].classList.remove( 'yashil')
}
function fnGreen() {
  elBoxes[0].classList.remove('qizil')
  elBoxes[1].classList.remove('sariq')
  elBoxes[2].classList.add( 'yashil')
}

function fnQizil() {
  elLights[0].classList.add('red')
  elLights[1].classList.remove('green')
}
function fnYashil() {
  elLights[0].classList.remove('red')
  elLights[1].classList.add('green')
}
function fnSariq() {
  elLights[0].classList.remove('red')
  elLights[1].classList.remove('green')
}
