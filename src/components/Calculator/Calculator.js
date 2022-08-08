import "./Calculator.css";

export default function Calculator() {
  return (
    <div className="calculator">
      <div className="top-section">
        <h1 className="calculator--result">0</h1>
        <p className="calculator--calculation-chain">0 + 0</p>
      </div>
      <div className="bottom-section">
        <div className="buttons">
          <button className="button" data-id="clean">
            AC
          </button>
          <button className="button" data-id="revert">
            +/-
          </button>
          <button className="button">%</button>
          <button className="button">/</button>
          <button className="button">7</button>
          <button className="button">8</button>
          <button className="button">9</button>
          <button className="button">-</button>
          <button className="button">4</button>
          <button className="button">5</button>
          <button className="button">6</button>
          <button className="button">*</button>
          <button className="button">1</button>
          <button className="button">2</button>
          <button className="button">3</button>
          <button className="button">+</button>
          <button className="button">0</button>
          <button className="button">.</button>
          <button className="button" data-id="delete">
            del
          </button>
          <button className="button" data-id="result">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
