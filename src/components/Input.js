import React, { useState } from "react";

const Input = (props) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        value={input}
        type="text"
        placeholder="Ethereum Address"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" onClick={() => props.triggerFetch(input)}>
        Submit
      </button>
    </div>
  );
};

export default Input;
