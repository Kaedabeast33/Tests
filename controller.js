const { response } = require("express");
const PICTURES = require("./db.json")
module.exports = {

    getCompliment: (req, res) => {

        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
     
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res)=> {
        const fortune = ["You will die tonight from a baby tortoise","You will make mama proud next tuesday","You will get lucky tonight","You will have to make a hard decision, and you'll regret it for the rest of your life","You will achieve all your dreams"]
        let randomIndex = Math.floor(Math.random()*fortune.length)
        let randomFortune = fortune[randomIndex]
        
        
        res.status(200).send(randomFortune)
    
    },
    // postPicture:(req,res)=> {
    //     const picture = "Hi"
    //     res.status(200).send(picture)
    // }
    getAllPictures:(req,res)=>{
        res.status(200).send(PICTURES)
    },
    postFortune:(req, res)=>{
        const {newFortune}= req.body
        fortune.push(newFortune)
        res.status(200).send(fortune)
        console.log(fortune)
    }

    // postPicture: (req, res)=>{
        
    // }
}