export const createArrayNumber = (start, end) => {
  const array = [];
  for (let index = start; index <= end; index++) {
    array.push(index);
  }
  return array;
};

export const randomId = () => {
  const id = (Math.random() + 1).toString(36).substring(7);
  return id;
};

export const dayCounting = (from, to) => {
  const dayInConvert = new Date(from);
  const dayOutConvert = new Date(to);
  const days = Math.ceil((dayOutConvert - dayInConvert) / (1000 * 3600 * 24));
  return days;
};
