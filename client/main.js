// const { error } = require("console");
// const { postPicture } = require("../server/controller");

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const form = document.querySelector("form")
const houses= document.getElementById("allPictures")

const picturesContainer = document.querySelector('#houses-container')

const pictureCallback = ({ data: picture }) => displayPictures(picture)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = ()=>{
    axios.get("http://localhost:4000/api/fortune/").then(res =>{
        const data = res.data;
        alert(data)
    });
}
const getAllPictures = ()=>{
    axios.get("http://localhost:4000/api/postpicture/").then(res=>{
    console.log(res.data)
    pictureCallback
})
}
const postFortune =(body)=>{
    axios.post("http://localhost:4000/api/addFortune/", (body).then()
}


// const postPicture = (data) => axios.post("http://localhost:4000/api/PicturePost/", data).then(res=>{
//     console.log("hello")
//     }).catch(error)
// }
// function submitHandler(e) {
//     e.preventDefault()

  
//     let imageURL = document.querySelector('#img')

//     let bodyObj = {
        
//         imageURL: imageURL.value
//     }

//     createHouse(bodyObj)

//     imageURL.value = ''
// }

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener("click", getFortune)
houses.addEventListener("click",getAllPictures)
form.addEventListener("submit",postFortune)
// form.addEventListener("submit", postPicture)

function displayPictures(arr) {
    picturesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPictureCard(arr[i])
    }
}
function createPictureCard(picture) {
    const pictureCard = document.createElement('div')
    

    pictureCard.innerHTML = `<img alt='picture cover image' src=${picture.imageURL} class="picture-cover-image"/>
  
    `


    picturesContainer.appendChild(pictureCard)
}