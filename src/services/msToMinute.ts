export function millisToMinutesAndSeconds(milliseconds: any) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  const parseSecondToNumber = Number(seconds);
  return `${minutes}:${parseSecondToNumber < 10 ? '0' : ''}${seconds}`;
}
