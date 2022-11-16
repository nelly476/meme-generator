import memesData from "/src/memesData.js";

function Meme() {
  function handleClick() {
    const data = memesData.data.memes;
    const item = data[Math.floor(Math.random() * data.length)].url;
    console.log(item);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={handleClick}>
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}

export default Meme;
