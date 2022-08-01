export default () => {
  // generating random integers within a range
  const max = 6;
  const min = 1;
  const randomNum = Math.random() * (max - min) + min;
  return `/avatar/avatar_${Math.floor(randomNum)}.png`;
};
