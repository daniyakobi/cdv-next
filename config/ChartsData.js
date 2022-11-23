
export const dataActivity = {
  labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  datasets: [
    {
      // label for our chart
      label: [],
      fill: true,
      data: [443, 655, 766, 888, 1000, 876, 922, 1544, 1566, 1344, 2004, 544],
      // color of the line chart
      borderColor: 'rgba(38, 136, 235, 1)',
      // partially transparent part below our line graph
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderWidth: 2,
      pointRadius: 2,
      pointHoverRadius: 5,
      borderCapStyle: 'butt',
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(38, 136, 235, 1)',
      pointHoverBorderColor: 'rgba(38, 136, 235, 1)',
      pointHoverBorderWidth: 2
    }
  ]
}
export const dataGender = {
  labels: [
    'Мужской',
    'Женский',
  ],
  datasets: [{
    data: [63, 37],
    backgroundColor: [ '#2688EB', '#9CC9FF' ],
    hoverOffset: 3,
    borderRadius: 10,
    hoverBackgroundColor: [ '#69ADFF', '#69ADFF' ],
    hoverBorderColor: [ '#2688EB', '#2688EB' ]
  }]
}
export const dataOld = {
  labels: [ '10-20', '21-30', '31-40', '41-50', '50+', 'Не указан' ],
  datasets: [{
    axis: 'y',
    data: [ 323, 1233, 875, 456, 211, 333 ],
    fill: false,
    backgroundColor: [ '#2688EB', '#2688EB', '#2688EB', '#2688EB', '#2688EB', '#2688EB', '#2688EB' ],
    borderRadius: 20,
    borderWidth: 1,
    hoverBackgroundColor: [ '#69ADFF', '#69ADFF', '#69ADFF', '#69ADFF', '#69ADFF', '#69ADFF', '#69ADFF' ],
    hoverBorderColor: [ '#2688EB', '#2688EB', '#2688EB', '#2688EB', '#2688EB', '#2688EB', '#2688EB' ]
  }]
}