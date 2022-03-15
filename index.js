const days = require("./days.json");
const ofdDays = require("./OFDData.json");

const raw = ofdDays.map((d) => d.cheque_date);

const holes = days.filter(
  (d) => d > raw[0] && d < raw[raw.length - 1] && !raw.includes(d)
);

console.log(holes);
