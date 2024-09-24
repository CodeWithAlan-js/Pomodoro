import { createContext, useContext, useState } from "react";
import { data } from "../data";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [initialTimeFocus, setInitialTimeFocus] = useState(data.pomodoro.time);
  const [shortBreak, setShortBreak] = useState(data.shortBreak.time);
  const [longBreak, setLongBreak] = useState(data.longBreak.time);
  const [timer, setTimer] = useState(initialTimeFocus);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTimerType, setCurrentTimerType] = useState(data.pomodoro.name);
  const [autoStartBreak, setAutoStartBreak] = useState(false);
  const [autoStartPomodoro, setAutoStartPomodoro] = useState(false);
  const [selectedTimer, setSelectedTimer] = useState(data.pomodoro.name);

  const updateTimer = (newTime) => {
    setTimer(newTime);
  };

  return (
    <TimerContext.Provider
      value={{
        initialTimeFocus,
        setInitialTimeFocus,
        shortBreak,
        setShortBreak,
        longBreak,
        setLongBreak,
        updateTimer,
        setIsRunning,
        isRunning,
        timer,
        setTimer,
        currentTimerType,
        setCurrentTimerType,
        autoStartBreak,
        setAutoStartBreak,
        autoStartPomodoro,
        setAutoStartPomodoro,
        setSelectedTimer,
        selectedTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimerContext = () => {
  return useContext(TimerContext);
};
