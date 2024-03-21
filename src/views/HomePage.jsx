import Timer from "../components/Timer";
import Header from "../components/Header";
import { useState } from "react";
import Setting from "../components/Setting";
import { TimerProvider, useTimerContext } from "../components/TimerContext";

export default function HomePage() {
    const [isSettingOpen, setIsSettingOpen] = useState(false)

    const handleSettingClick = () => {
        setIsSettingOpen(!isSettingOpen);
    }

    const handleCloseSetting = () =>{
        setIsSettingOpen(false)
    }


  return (
    <TimerProvider>
    <div className="bg-[url('src/assets/background-1.jpg')] bg-center bg-cover bg-no-repeat w-screen h-screen relative z-98">
       <Header onSettingClick={handleSettingClick} ></Header>
      <Timer></Timer>
      {isSettingOpen && <Setting onClose={handleCloseSetting} />}
    </div>
    </TimerProvider>
  );
}