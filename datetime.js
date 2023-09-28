const yargs = require('yargs');

yargs
  .command('current', 'Получить текущую дату и время в формате ISO', {}, () => {
    const currentDate = new Date();
    console.log(currentDate.toISOString());
  })
  .command('year', 'Получить текущий год', {}, () => {
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
  })
  .command('month', 'Получить текущий месяц', {}, () => {
    const currentMonth = new Date().getMonth() + 1; // Месяцы начинаются с 0
    console.log(currentMonth);
  })
  .command('date', 'Получить дату в календарном месяце', {}, () => {
    const currentDate = new Date();
    console.log(currentDate.getDate());
  })
  .command('add', 'Добавить указанный интервал к текущей дате и времени', {
    date: {
      alias: 'd',
      describe: 'Количество дней для добавления',
      demandOption: true,
      type: 'number',
    },
    month: {
      alias: 'm',
      describe: 'Количество месяцев для добавления',
      type: 'number',
    },
  }, (argv) => {
    const currentDate = new Date();
    const { date, month } = argv;

    if (date) {
      currentDate.setDate(currentDate.getDate() + date);
    }

    if (month) {
      currentDate.setMonth(currentDate.getMonth() + month);
    }

    console.log(currentDate.toISOString());
  })
  .demandCommand() // Обязательно указывать команду
  .help()
  .argv;
