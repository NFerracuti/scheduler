import { useState } from "react";

export default function useVisualMode(initialMode) {
  const [ mode, setMode ] = useState(initialMode);

  const transition = (newMode) => {
    console.log("transitioning to ", newMode);
    setMode(newMode);
  }

  return {
    mode,
    transition
  }
}

