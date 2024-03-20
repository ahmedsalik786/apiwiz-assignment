import React, { useState } from "react";
import "./analyzer.css";
import { Link } from "react-router-dom";

const WordInput = ({ input, setInput, calculateMetrics }) => {
  return (
    <div className="wordInputContainer">
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
      <button className="processbtn" onClick={() => calculateMetrics(input)}>
        Process Word
      </button>
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
    <button
      style={{ width: "70px" }}
      className="processbtn2"
      onClick={() => calculateMetrics(input)}
    >
      Process Paragraph
    </button>
  </div>
);

const Analyzer = () => {
  const [isWord, setIsWord] = useState(true);
  const [input, setInput] = useState("");
  const [result, setResult] = useState({
    charCount: 0,
    wordCount: 0,
    sentenceCount: 0,
    paragraphCount: 0,
    spaceCount: 0,
    punctuationCount: 0,
  });
  const [isWordSeleced, setIsWordSeleced] = useState();

  const calculateMetrics = (currentInput) => {
    const charCount = currentInput.length;
    const wordCount = currentInput
      ? currentInput.trim().split(/\s+/).filter(Boolean).length
      : 0;
    const sentenceCount = currentInput
      ? currentInput.match(/[.!?]+/g)?.length || 0
      : 0;
    const paragraphCount = currentInput
      ? currentInput.replace(/\n$/gm, "").split(/\n+/).filter(Boolean).length
      : 0;
    const spaceCount = currentInput ? currentInput.split(" ").length - 1 : 0;
    const punctuationCount = currentInput
      ? currentInput.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g)?.length || 0
      : 0;

    setResult({
      charCount,
      wordCount,
      sentenceCount,
      paragraphCount,
      spaceCount,
      punctuationCount,
    });
  };

  const OutputBox = () => (
    <div>
      <table>
        <thead>
          <tr>
            <th>Character</th>
            <th>Words</th>
            <th>Sentences</th>
            <th>Paragraphs</th>
            <th>Spaces</th>
            <th>Punctuations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{result.charCount}</td>
            <td>{result.wordCount}</td>
            <td>{result.sentenceCount}</td>
            <td>{result.paragraphCount}</td>
            <td>{result.spaceCount}</td>
            <td>{result.punctuationCount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <div style={{ padding: "2rem" }}>
        <div className="header">
          <h1>Text Analyzer</h1>
          <p>
            Text Analyzer is a simple free online tool for SEO web content
            analysis that helps you find most frequent phrases and words, number
            of characters, words, sentences and paragraphs, and estimated read
            and speak time of your content.
          </p>
        </div>
        <div className="body">
          <div className="selectBtnContainer">
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
        </div>
        <div className="inputbox">
          {isWord ? (
            <WordInput
              input={input}
              setInput={setInput}
              calculateMetrics={calculateMetrics}
            />
          ) : (
            <ParaInput
              input={input}
              setInput={setInput}
              calculateMetrics={calculateMetrics}
            />
          )}
        </div>
        <div className="outputBox">
          <OutputBox />
        </div>
      </div>
      <Link
        style={{ position: "absolute", left: "50px", bottom: "50px" }}
        to={"/tab"}
      >
        <button className="processbtn2">Go to Tab</button>
      </Link>
    </>
  );
};

export default Analyzer;
