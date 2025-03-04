import React, { useState } from "react";

function WordCounter() {
  const [text, setText] = useState("");
  const [character, setCharacter] = useState(0);
  const [sentence, setSentence] = useState(0);

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    // Character count (excluding spaces)
    const characters = inputText.replace(/\s+/g, "");
    setCharacter(characters.length);

    // Sentence count
    const sentences = inputText
      .trim()
      .split(/(?<=[.!?])\s+/)
      .filter((sentence) => sentence.trim().length > 0);

    setSentence(sentences.length);
  };

  const resetCounter = () => {
    setText("");
    setCharacter(0);
    setSentence(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center px-4">
      <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-3xl">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Word Counter
        </h1>

        {/* Text Area */}
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg resize-none"
          rows="6"
          value={text}
          onChange={handleTextChange}
          placeholder="Type or paste your text here..."
        ></textarea>

        {/* Buttons */}
        <div className="flex justify-end mt-4">
          <button
            onClick={resetCounter}
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all duration-200"
          >
            Clear Text
          </button>
        </div>

        {/* Results Section */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl text-center font-semibold text-green-500 mb-2">
            Results
          </h2>
          <div className="flex justify-between text-lg font-medium text-gray-600">
            <p>
              <strong>Characters:</strong> {character}
            </p>
            <p>
              <strong>Sentences:</strong> {sentence}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordCounter;
