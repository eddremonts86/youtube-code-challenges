import { useEffect, useState } from "react";

const countDownTimeOnLocalStorage = () => {
  const time = localStorage.getItem("countDownTime");
  if (time) {
    return parseInt(time);
  }
  return null;
};

const formatTime = (time) => {
  return time.toString().padStart(2, "0");
};

export default function UseTimer({ countDownTime }) {
  const initialTime = countDownTimeOnLocalStorage() || countDownTime || 600;
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    localStorage.setItem("countDownTime", time);
    return () => clearInterval(interval);
  }, [time]);

  const minutes = formatTime(Math.floor(time / 60));
  const seconds = formatTime(time % 60);
  if (minutes === "00" && seconds === "00") {
    setTime(initialTime);
    localStorage.removeItem("countDownTime");
  }
  return { minutes, seconds };
}
