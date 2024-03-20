import React, { useState } from "react";
import "./analyzer.css";
const WordInput = ({ input, setInput, calculateMetrics }) => {
  return (
    <div className="wordInputContaine">
      <input
        className="wordInput"
        type="text"
        value={input}
        placeholder="Type a Note..."
        onChange={(e) => {
          setInput(e.target.value);
          calculateMetrics(e.target.value);
        }}
      />
    </div>
  );
};

const ParaInput = ({ input, setInput, calculateMetrics }) => (
  <div className="paraInputContainer">
    <textarea
      className="paraInput"
      value={input}
      placeholder="Type or copy/paste your content here."
      onChange={(e) => {
        setInput(e.target.value);
        calculateMetrics(e.target.value);
      }}
    ></textarea>
  </div>
);

function Tab() {
  const [isWord, setIsWord] = useState(true);

  return (
    <div
      style={{
        backgroundColor: "#1E1E1E",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "center",
        padding: "20px",
      }}
    >
      <div className="selectBtnContainer2">
        <button
          style={{
            borderRadius: "4px",
            boxShadow: isWord ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : "none",
          }}
          className="btn"
          onClick={() => setIsWord(true)}
        >
          Word Input
        </button>
        <button
          style={{
            borderRadius: "4px",
            boxShadow: !isWord ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none",
          }}
          className="btn"
          onClick={() => setIsWord(false)}
        >
          Paragraph
        </button>
      </div>
      <WordInput />
      <div className="selectBtnContainer2">
        <button
          style={{
            borderRadius: "4px",
            boxShadow: isWord ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : "none",
          }}
          className="btn"
          onClick={() => setIsWord(true)}
        >
          Word Input
        </button>
        <button
          style={{
            borderRadius: "4px",
            boxShadow: !isWord ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none",
          }}
          className="btn"
          onClick={() => setIsWord(false)}
        >
          Paragraph
        </button>
      </div>
      <ParaInput />
    </div>
  );
}

export default Tab;
