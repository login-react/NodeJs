const setCurrentTime = () => {
  const d = new Date();
  const expiresTime = 24 * 60 * 60 * 1000;
  d.setTime(d.getTime() + expiresTime);
  return d.toGMTString();
};
module.exports = {
  setCurrentTime,
};
