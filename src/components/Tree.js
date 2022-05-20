import React from "react";

const positionList = [
  { left: "20%", top: "50%" },
  { left: "25%", top: "55%" },
  { left: "30%", top: "60%" },
  { left: "35%", top: "65%" },
  { left: "40%", top: "70%" },
  { left: "50%", top: "75%" },
  { left: "60%", top: "70%" },
  { left: "65%", top: "65%" },
  { left: "70%", top: "60%" },
  { left: "75%", top: "55%" },
  { left: "80%", top: "50%" },
  { left: "75%", top: "45%" },
  { left: "70%", top: "40%" },
  { left: "65%", top: "35%" },
  { left: "60%", top: "30%" },
  { left: "50%", top: "25%" },
  { left: "40%", top: "30%" },
  { left: "35%", top: "35%" },
  { left: "30%", top: "40%" },
  { left: "25%", top: "45%" },
];

const Tree = (props) => {
  return (
    <div className="flow-container">
      <div className="central-node">{props.address}</div>
      {[...props.tree].map((tx, i) => (
        <div
          id={i}
          onClick={(e) => {
            props.triggerFetch(e.target.innerHTML);
          }}
          style={{
            position: "absolute",
            left: `${positionList[i].left}`,
            transform: "translateX(-50%)",
            top: `${positionList[i].top}`,
          }}
        >
          {tx}
        </div>
      ))}
    </div>
  );
};

export default Tree;
