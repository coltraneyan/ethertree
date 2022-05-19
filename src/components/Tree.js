import React from "react";

const Tree = (props) => {
  return (
    <div>
      <div>
        <div id="start">{props.address}</div>
        {[...props.tree].map((tx, i) => (
          <div
            id={i}
            onClick={(e) => {
              props.triggerFetch(e.target.innerHTML);
            }}
          >
            {tx}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tree;
