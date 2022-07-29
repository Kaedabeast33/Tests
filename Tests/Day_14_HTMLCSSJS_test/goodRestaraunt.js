let button=document.querySelector(".buttonContainer")
console.log(button)
function moveButtonDown(event){
button.style.top="400px"
alert("you don't want to press that")
}
button.addEventListener("click",moveButtonDown)

