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

    function handleChange(event) {
      const {name, value} = event.target
      setMeme(prevMeme => ({
          ...prevMeme,
          [name]: value
      }))
  }

   return (
    <main>
      <form className="form">
        <div>
            <input
              type="text"
              placeholder="Top text"
              className="form--input"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            ></input>
          </div>

        <div>
          <input
              type="text"
              placeholder="Bottom text"
              className="form--input"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            ></input>
        </div>

        <button className="form--button"
        onClick={getMemeImage}>Get a new meme image 🖼</button>
   
        <div className="meme">
          <img src={meme.randomImage} className="meme--image">
          </img>
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </form>
    </main>
  );
}
