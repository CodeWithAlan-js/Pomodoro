import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { FaAppleAlt } from "react-icons/fa";
import { Switch } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { useTimerContext } from "./TimerContext";

export default function Setting({ onClose }) {

  const {
    initialTimeFocus,
    shortBreak,
    longBreak,
    setInitialTimeFocus,
    setShortBreak,
    setLongBreak,
    updateTimer,
    autoStartPomodoro,
    setAutoStartPomodoro,
    autoStartBreak,
    setAutoStartBreak,
    setSelectedTimer,
  } = useTimerContext();



  const handleCloseClick = () => {
    onClose();
  };

  const handleUpdatePomodoroTime = (newValue) => {
    setInitialTimeFocus(newValue);
    updateTimer(newValue);
    setSelectedTimer('pomodoro')
  };

  const handleUpdateShortBreak = (newValue) => {
    setShortBreak(newValue);
    updateTimer(newValue);
    setSelectedTimer('shortBreak')
  };

  const handleUpdateLongBreak = (newValue) => {
    setLongBreak(newValue);
    updateTimer(newValue);
    setSelectedTimer('longBreak')
  };

  const handleUpdateStartBreak = () => {
    setAutoStartBreak(!autoStartBreak);
  };
  
  const handleUpdateStartPomodoro = () => {
    setAutoStartPomodoro(!autoStartPomodoro);
  };

  return (
    <div className="flex justify-end items-center w-screen h-screen absolute z-99 top-0 left-0">
      <div className="absolute p-5 top-0 min-w-96  bg-white flex flex-col opacity-100 rounded animate__animated animate__fadeIn">
        <div className="relative w-full flex justify-between items-center border-b border-t-0 border-l-0 border-r-0 border-black border-solid">
          <div>
            <p className="m-4">Setting</p>
          </div>
          <IoMdClose
            size={30}
            className=" mr-2 cursor-pointer hover:opacity-50 duration-300"
            onClick={handleCloseClick}
          />
        </div>
        <div>
          <div className="flex w-full text-slate-400">
            <p className="flex mt-8">
              <FaAppleAlt className="mr-1 ml-5" />
              TIMER
            </p>
          </div>
          <div className="flex flex-col justify-evenly h-[300px] mt-5">
            <div className="flex flex-col items-center">
              <p className="mb-1">Pomodoro</p>
              <div className="w-auto">
                <Input
                  color="blue"
                  label="Temps en minutes"
                  type="number"
                  min={1}
                  value={initialTimeFocus / 60}
                  onChange={(e) =>
                    handleUpdatePomodoroTime(e.target.value * 60)
                  }
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-1">Short Break</p>
              <div className="w-auto">
                <Input
                  color="blue"
                  label="Temps en minutes"
                  type="number"
                  min={1}
                  value={shortBreak / 60}
                  onChange={(e) =>
                    handleUpdateShortBreak(e.target.value * 60)
                  }
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-1">Long Break</p>
              <div className="w-auto">
                <Input
                  color="blue"
                  label="Temps en minutes"
                  type="number"
                  min={1}
                  value={longBreak / 60}
                  onChange={(e) => handleUpdateLongBreak(e.target.value * 60)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-10 flex flex-col justify-center items-center">
          <div className=" w-4/5 flex flex-col justify-center">
            <div className="flex justify-evenly mb-5">
              <p className=" font-bold">Auto Start breaks</p>
              <Switch
                color="green"
                checked={autoStartBreak}
                onChange={handleUpdateStartBreak}
              />
            </div>
            <div className="flex  justify-evenly">
              <p className="font-bold">Auto Start Pomodoros</p>
              <Switch
                color="green"
                checked={autoStartPomodoro}
                onChange={handleUpdateStartPomodoro}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
