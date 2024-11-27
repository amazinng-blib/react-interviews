//Conver Time from 12 to 24 hrs

//01:02 PM

const convert12to24 = (time12h) => {
  let [time, modifier] = time12h.split(' ');
  let [hours, minutes] = time.split(':');
  if (hours > 12) throw new Error('Invalid time format');

  if (hours === '12') hours = '00';
  if (modifier === 'PM') hours = parseInt(hours) + 12;

  return `${hours}:${minutes}`;
};

const time = convert12to24('04:02 PM');

console.log(time);
