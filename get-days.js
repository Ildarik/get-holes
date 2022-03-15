function listDays() {
  let days = [];
  const years = [
    2012, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
  ];

  years.map((year) => {
    for (let month = 0; month < 12; month++) {
      let date = new Date(Date.UTC(year, month, 1));
      while (date.getMonth() === month) {
        days.push(
          new Date(date)
            .toLocaleString("en-us", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
            .replace(/(\d+)\/(\d+)\/(\d+)/, "$3-$1-$2")
        );
        date.setDate(date.getDate() + 1);
      }
    }
  });

  return days;
}

// console.log(listDays());
console.dir(listDays(), { maxArrayLength: null });
