import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [result, setResult] = useState(0);
  const [calculationChain, setChain] = useState([]);

  const handleButtonClick = (action) => {
    setChain([...calculationChain, action]);

    if (Number.isInteger(+action)) {
      if (Number.isInteger(+calculationChain[calculationChain.length - 1])) {
        const newChain = [...calculationChain];
        newChain[newChain.length - 1] = newChain[newChain.length - 1] + action;
        setChain(newChain);
      }
    }
  };

  const getResult = (chain) => {
    if (Number.isNaN(eval(chain))) {
      setResult("Error");
    } else {
      setResult(eval(chain));
    }
  };

  const clean = () => {
    setChain([]);
    setResult(0);
  };

  const revertNumber = (chain) => {
    const newChain = [...chain];
    newChain[newChain.length - 1] *= -1;

    setChain(newChain);
  };

  const del = (chain) => {
    setChain(chain.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="top-section">
        <h1 className="calculator--result">{result}</h1>
        <p className="calculator--calculation-chain">
          {calculationChain.join("")}
        </p>
      </div>
      <div className="bottom-section">
        <div className="buttons">
          <button className="button" data-id="clean" onClick={clean}>
            AC
          </button>
          <button
            className="button"
            data-id="revert"
            onClick={() => revertNumber(calculationChain)}
          >
            +/-
          </button>
          <button
            className="button"
            onClick={(e) => handleButtonClick(e.target.textContent)}
          >
            %
          </button>
          <button
            className="button"
            onClick={(e) => handleButtonClick(e.target.textContent)}
          >
            /
          </button>
          <button
            className="button"
            onClick={(e) => handleButtonClick(e.target.textContent)}
          >
            7
          </button>
          <button
            className="button"
            onClick={(e) => handleButtonClick(e.target.textContent)}
          >
            8
          </button>
          <button
            className="button"
            onClick={(e) => handleButtonClick(e.target.textContent)}
          >
            9
          </button>
          <button
            className="button"
            onClick={(e) => handleButtonClick(e.target.textContent)}
          >
            -
          </button>
          <button
            className="button"
            onClick={(e) => handleButtonClick(e.target.textContent)}
          >
            4
          </button>
          <button
            className="button"
            onClick={(e) => handleButtonClick(e.target.textContent)}
          >
            5
          </button>
          <button
            className="button"
            onClick={(e) => handleButtonClick(e.target.textContent)}
          >
            6
          </button>
          <button
            className="button"
            onClick={(e) => handleButtonClick(e.target.textContent)}
          >
            *
          </button>
          <button
            className="button"
            onClick={(e) => handleButtonClick(e.target.textContent)}
          >
            1
          </button>
          <button
            className="button"
            onClick={(e) => handleButtonClick(e.target.textContent)}
          >
            2
          </button>
          <button
            className="button"
            onClick={(e) => handleButtonClick(e.target.textContent)}
          >
            3
          </button>
          <button
            className="button"
            onClick={(e) => handleButtonClick(e.target.textContent)}
          >
            +
          </button>
          <button
            className="button"
            onClick={(e) => handleButtonClick(e.target.textContent)}
          >
            0
          </button>
          <button
            className="button"
            onClick={(e) => handleButtonClick(e.target.textContent)}
          >
            .
          </button>
          <button
            className="button"
            data-id="delete"
            onClick={() => del(calculationChain)}
          >
            del
          </button>
          <button
            className="button"
            data-id="result"
            onClick={() => getResult(calculationChain.join(""))}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
