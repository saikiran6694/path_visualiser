import React from "react";
import "./ProgressBar.scss";

const Stat = ({ label, value, accent }) => {
  const pct = Math.min((value / 800) * 100, 100);
  return (
    <div className="stat">
      <div className="stat__head">
        <span className="stat__label">{label}</span>
        <span className="stat__value" style={{ color: accent }}>
          {String(value).padStart(3, "0")}
        </span>
      </div>
      <div className="stat__track">
        <div
          className="stat__fill"
          style={{ width: `${pct}%`, background: accent }}
        />
      </div>
    </div>
  );
};

const ProgressBar = (props) => {
  const { visitedNodes, shortestNodes } = props;
  return (
    <div className="stats">
      <Stat label="Nodes visited" value={visitedNodes} accent="var(--cyan)" />
      <Stat label="Shortest path" value={shortestNodes} accent="var(--amber)" />
    </div>
  );
};

export default ProgressBar;
