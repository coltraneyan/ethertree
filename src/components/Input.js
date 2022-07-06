import React, { useState } from "react";

const Input = (props) => {
  const [input, setInput] = useState("");

  return (
    <div className="input-wrapper">
      <div>
        <input
          value={input}
          type="text"
          placeholder="Ethereum Address"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={() => props.triggerFetch(input)}>
          Search
        </button>
      </div>
      <div>ethertree _ a graph-based ethereum block explorer</div>
    </div>
  );
};

export default Input;
