const milisecondsToTracktime = (miliseconds) => {
  const minutes = parseInt(miliseconds / 1000 / 60, 10);
  let seconds = parseInt((miliseconds / 1000) % 60, 10);
  if (seconds < 10) seconds = `0${seconds}`;
  return `${minutes}:${seconds}`;
};

export default milisecondsToTracktime;
