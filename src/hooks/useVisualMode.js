import { useState } from "react";

export default function useVisualMode(initialMode) {
  const [history, setHistory] = useState([initialMode]);

  function transition(newMode, replace = false){
    setHistory(prev => (replace ? [...prev.slice(0, prev.length -1), newMode] : [...prev, newMode]))
  }

  function back() {
    setHistory(prev => (prev.length > 1 ? [...prev.slice(0, prev.length - 1)] : [...prev]))
  }

  return { mode: history[history.length - 1], transition, back };
}

