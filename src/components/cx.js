const cx = (...args) => {
  const classes = [];
  for (const arg of args) if (arg) classes.push(arg);
  return classes.join(" ");
};

export default cx;
