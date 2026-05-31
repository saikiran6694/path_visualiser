import React, { useState } from "react";
import "./AppNavbar.scss";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import ProgressBar from "../ProgressBar/ProgressBar";

const ALGOS = [
  { key: "dijkstra", label: "Dijkstra", sub: "weighted · optimal", handler: "handleDijkstra" },
  { key: "astar", label: "A\u2605", sub: "heuristic · fast", handler: "handleAstar" },
  { key: "bfs", label: "BFS", sub: "breadth · optimal", handler: "handleBFS" },
  { key: "dfs", label: "DFS", sub: "depth · greedy", handler: "handleDFS" },
];

const AppNavbar = (props) => {
  const [selected, setSelected] = useState("dijkstra");
  const [openMenu, setOpenMenu] = useState(false);

  const runSelected = () => {
    const algo = ALGOS.find((a) => a.key === selected);
    if (!algo) return;
    props[algo.handler]();
    props.handleVisualization();
  };

  return (
    <header className="deck">
      <div className="deck__bar">
        {/* Brand */}
        <div className="deck__brand">
          <span className="deck__logo" aria-hidden>
            <svg viewBox="0 0 32 32" width="26" height="26">
              <path
                d="M5 27 L5 9 Q5 5 9 5 L18 5 Q23 5 23 10 Q23 15 18 15 L12 15 Q8 15 8 19 L8 27"
                fill="none"
                stroke="url(#g)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeDasharray="2 4"
              />
              <circle cx="5" cy="27" r="3" fill="var(--emerald)" />
              <circle cx="23" cy="10" r="3" fill="var(--rose)" />
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--cyan)" />
                  <stop offset="100%" stopColor="var(--violet)" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <div className="deck__title">
            <h1>Pathfinder</h1>
            <p>algorithm visualizer</p>
          </div>
        </div>

        {/* Algorithm selector + run */}
        <div className="deck__group">
          <div className="seg" role="tablist" aria-label="Algorithm">
            {ALGOS.map((a) => (
              <button
                key={a.key}
                className={"seg__btn" + (selected === a.key ? " is-active" : "")}
                onClick={() => setSelected(a.key)}
                title={a.sub}
              >
                {a.label}
              </button>
            ))}
          </div>
          <button className="btn btn--run" onClick={runSelected}>
            <span className="btn--run__dot" />
            Visualize
          </button>
        </div>

        {/* Tools */}
        <div className="deck__group deck__group--tools">
          <div className={"menu" + (openMenu ? " is-open" : "")}>
            <button
              className="btn btn--ghost"
              onClick={() => setOpenMenu((v) => !v)}
              onBlur={() => setTimeout(() => setOpenMenu(false), 140)}
            >
              Maze ▾
            </button>
            <div className="menu__panel">
              <button
                onClick={() => {
                  props.handleMaze();
                  props.handleVisualization();
                  setOpenMenu(false);
                }}
              >
                Recursive Division
              </button>
              <button
                onClick={() => {
                  props.handleRandomMaze();
                  setOpenMenu(false);
                }}
              >
                Random Maze
              </button>
            </div>
          </div>

          <button className="btn btn--ghost" onClick={props.handleClearPath}>
            Clear Path
          </button>
          <button className="btn btn--ghost" onClick={props.handleClearGrid}>
            Reset
          </button>

          <a
            className="btn btn--icon"
            href="https://github.com/saikiran6694/path_visualiser"
            target="_blank"
            rel="noreferrer"
            title="GitHub repository"
          >
            <i className="fa fa-github" />
          </a>

          <DarkModeToggle />
        </div>
      </div>

      {/* Readout strip: legend + stats */}
      <div className="deck__strip">
        <ul className="legend">
          <li><span className="chip chip--start" /> Start</li>
          <li><span className="chip chip--finish" /> Target</li>
          <li><span className="chip chip--wall" /> Wall</li>
          <li><span className="chip chip--visited" /> Visited</li>
          <li><span className="chip chip--path" /> Path</li>
        </ul>
        <ProgressBar
          visitedNodes={props.visitedNodes}
          shortestNodes={props.shortestNodes}
        />
      </div>
    </header>
  );
};

export default AppNavbar;
