import PropTypes from "prop-types";
import UseTimer from "../hooks/UseTimer";

export default function CountDown({ countDownTime }) {
  const { minutes, seconds } = UseTimer(countDownTime);
  return (
    <div className="bg-blue-800 p-12 text-8xl rounded-xl flex justify-center items-center">
      {minutes}:{seconds}{" "}
    </div>
  );
}

CountDown.propTypes = {
  countDownTime: PropTypes.number.isRequired,
};
