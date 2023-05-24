import dayjs from "dayjs";

export function calculateDatesDiffrence(targetDate) {
  const timeStamp = dayjs(targetDate);
  const peresentDate = dayjs();
  console.log("hello");
  if (timeStamp.isBefore(peresentDate)) {
    return {
      seconds: "00",
      minutes: "00",
      hours: "00",
      days: "00",
    };
  }
  return {
    seconds: getRemainingSecond(peresentDate, timeStamp),
    minutes: getRemainingMinutes(peresentDate, timeStamp),
    hours: getRemainingHours(peresentDate, timeStamp),
    days: getRemainingDays(peresentDate, timeStamp),
  };
}

function getRemainingSecond(peresentDate, timeStamp) {
  const seconds = timeStamp.diff(peresentDate, "seconds") % 60;
  console.log(seconds);
  return padWithZeros(seconds, 2);
}

function getRemainingMinutes(peresentDate, timeStamp) {
  const minutes = timeStamp.diff(peresentDate, "minutes") % 60;
  return padWithZeros(minutes, 2);
}

function getRemainingHours(peresentDate, timeStamp) {
  const hours = timeStamp.diff(peresentDate, "hours") % 60;
  return padWithZeros(hours, 2);
}

function getRemainingDays(peresentDate, timeStamp) {
  const days = timeStamp.diff(peresentDate, "days");
  return days;
}

function padWithZeros(number, length) {
  const numberToString = number.toString();
  if (s.length >= length) return numberToString;
  return "0".repeat(length - numberToString.length) + numberToString;
}
