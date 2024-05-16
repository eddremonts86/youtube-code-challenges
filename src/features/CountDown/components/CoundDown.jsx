import { UseTimer } from '../hooks/UseTimer';


export default function CountDown({ countDownTime }) {
    const { minutes, seconds } = UseTimer(countDownTime);
    return <div className="bg-red-800 p-12 text-2xl rounded-xl" >{minutes}:{seconds} </div>;
}