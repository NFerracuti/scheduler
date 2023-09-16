import { useState } from "react";

export default function useVisualMode(initialMode) {
  const [history, setHistory] = useState([initialMode]);

  const transition = (newMode, replace) => {
    // console.log("transitioning to ", newMode);
    if (!replace) {
      setHistory(prev => [...prev, newMode])
    } else {
      setHistory(prev => [...prev.slice(0, prev.length - 1), newMode])
    }
  }
  //on click save, transition to saving screen, on error skip saving screen and transition to error
  // [empty, create, saving, error, create]

  function back() {
    history.length > 1 && setHistory(prev => [...prev.slice(0, prev.length - 1)]);
  }

  return {
    mode: history[history.length - 1],
    transition,
    back
  }
}
