import React from "react";
import Xarrow from "react-xarrows";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function pseudoPadding(bottom, top) {
  if (Math.round(Math.random() * 1 + 1) === 1) {
    return top;
  } else {
    return bottom;
  }
}

const Tree = (props) => {
  return (
    <div className="flow-container">
      <div className="central-node" id="a">
        {props.address}
      </div>
      {[...props.tree].map((tx, i) => (
        <div
          className="node-wrapper"
          id={tx}
          onClick={(e) => {
            props.triggerFetch(e.target.id);
          }}
          style={{
            position: "absolute",
            left: `${getRandomInt(20, 80)}%`,
            transform: "translateX(-50%)",
            top: `${pseudoPadding(
              getRandomInt(20, 45),
              getRandomInt(55, 80)
            )}%`,
          }}
        >
          <div className="address-node">{tx}</div>
        </div>
      ))}
      {[...props.tree].map((tx, i) => (
        <Xarrow
          start="a" //can be react ref
          end={tx} //or an id
          startAnchor="middle"
          endAnchor="middle"
          showHead={false}
          strokeWidth={1}
          curveness={0}
        />
      ))}
    </div>
  );
};

export default Tree;
