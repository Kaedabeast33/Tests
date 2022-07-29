let body=document.querySelector("body")

let colorButton=document.querySelector(".color")

function alertColor(event){
   body.style.backgroundColor="rgba(124,0,0,0.7)";
   alert("Guess my favorite color")
}
colorButton.addEventListener("click",alertColor)

let newImg= document.createElement("img")

let placeButton = document.querySelector(".place")
let imageContainer = document.querySelector(".image")
function alertFavoritePlace(event){
    alert("Guess my favorite place")
    newImg.src="mountain.jpeg"
    imageContainer.appendChild(newImg)
    
 }
placeButton.addEventListener("click",alertFavoritePlace)

function favoriteRitual(event){
    alert("My Favorite Ritual is...?")
    newImg.src="music.jpeg"
    imageContainer.appendChild(newImg)
}
document.querySelector(".ritual").addEventListener("click",favoriteRitual)

function resetBackground(event){
    body.style.backgroundColor="#ddd"
}
document.querySelector(".reset").addEventListener("click",resetBackground)

