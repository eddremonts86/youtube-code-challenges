import { useEffect, useState } from "react";


const countDownTimeOnLocalStorage =() => {
    const time = localStorage.getItem("countDownTime");
    if(time){
        return parseInt(time);
    }
    return 0;
}


export default function CountDown({countDownTime}) {
    const initialTime = countDownTimeOnLocalStorage() || countDownTime || 600;
    const [time, setTime] = useState(initialTime);
    
    useEffect(() => {
        const interval = setInterval(() => {

        setTime((prevTime) => prevTime - 1);
        }, 1000);
        localStorage.setItem("countDownTime", time);
        return () => clearInterval(interval);
    }, []);


    const minutes = Math.floor(time / 60);  
    const seconds = time % 60;

    
    return {minutes, seconds};
}