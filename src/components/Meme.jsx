import memesData from "/src/memesData.js";
import React from "react";

function Meme() {
  const [meme, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage(e) {
    const data = allMemeImages.data.memes;
    const item = data[Math.floor(Math.random() * data.length)].url;

    setMemeImage((prev) => {
      return {
        ...prev,
        randomImage: item,
      };
    });
    console.log(meme);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMemeImage((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(meme);
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.value}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.value}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
