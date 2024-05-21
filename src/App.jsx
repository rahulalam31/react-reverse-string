import { useState } from "react";
import "./App.css";

function App() {
  const [str, setStr] = useState("");
  const [revrseWord, setReverseWord] = useState("");

  const reverseString = (word) => {
    let newWord = "";

    for (var i = word.length - 1; i >= 0; i--) {
      newWord += word[i];
    }

    setReverseWord(newWord);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    reverseString(str);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter any word"
          onChange={(e) => setStr(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <div className="output">
        <p>Output : {revrseWord}</p>
      </div>
    </>
  );
}

export default App;
