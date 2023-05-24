import { calculateDatesDiffrence } from "./utility";
import { useEffect, useState } from "react";

export default function CountDown({ date }) {
  const [targetDate, setTargetDate] = useState(date.getTime());
  const [remainginDate, setRemainingDate] = useState();

  const updateRemainingDate = (target) => {
    setRemainingDate(calculateDatesDiffrence(target));
  };

  useEffect(() => {
    setTargetDate(date.getTime());
  }, [date]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingDate(targetDate);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="space-x-[4px] text-white text-xs md:text-base">
      {[...Array(remainginDate?.days.length).keys()].map((day, idx) => {
        if (remainginDate?.days == 0) {
          return;
        }
        return (
          <span
            key={idx}
            className="bg-[#5A31F4]  rounded-md shadow-lg px-3 py-2 font-yekanBlack"
          >
            {remainginDate?.days[idx]}
          </span>
        );
      })}
      <b>:</b>
      <span className="bg-[#5A31F4]  rounded-md shadow-lg px-3 py-2 font-yekanBlack ">
        {remainginDate?.hours[0]}
      </span>
      <span className="bg-[#5A31F4]  rounded-md shadow-lg px-3 py-2 font-yekanBlack">
        {remainginDate?.hours[1]}
      </span>
      <b>:</b>
      <span className="bg-[#5A31F4]  rounded-md shadow-lg px-3 py-2 font-yekanBlack">
        {remainginDate?.minutes[0]}
      </span>
      <span className="bg-[#5A31F4]  rounded-md shadow-lg px-3 py-2 font-yekanBlack">
        {remainginDate?.minutes[1]}
      </span>
      <b>:</b>
      <span className="bg-[#5A31F4]  rounded-md shadow-lg px-3 py-2 font-yekanBlack">
        {remainginDate?.seconds[0]}
      </span>
      <span className="bg-[#5A31F4]  rounded-md shadow-lg px-3 py-2 font-yekanBlack">
        {remainginDate?.seconds[1]}
      </span>
    </div>
  );
}
