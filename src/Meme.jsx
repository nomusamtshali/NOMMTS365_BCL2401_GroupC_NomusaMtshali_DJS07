import React from "react";
import memesData from "./MemesData";

export default function Meme() {

  //const [memeImage, setMemeImage] = React.useState("")

   const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        /*const url = memesArray[randomNumber].url
        console.log(url)*/
    }

   return (
    <main>
      <form className="form">
        <div>
            <input
              type="text"
              placeholder="Top text"
              className="form--input"
            ></input>
          </div>

        <div>
          <input
              type="text"
              placeholder="Bottom text"
              className="form--input"
            ></input>
        </div>

        <button className="form--button"
        onClick={getMemeImage}>Get a new meme image 🖼</button>

        <img src={meme.randomImage} className="meme--image">
        </img>
      </form>
    </main>
  );
}
