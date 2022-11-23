export const LineConfig = {
  plugins: {
    // show legends for our graph
    legend: {
      display: false,
    },
  },
  lineHeightAnnotation: {
    always: true,
    lineWeight: 1.5,
  },

  //   animate in
  animations: {
    tension: {
      duration: 1000,
      easing: 'linear',
      from: 1,
      to: 0,
      loop: false
    }
  },
  maintainAspectRatio: false,
  responsive: true,

  // show the x and y scales
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: true
      }
    }
  }
}

export const DoughnutConfig = {
  plugins: {
    // show legends for our graph
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        boxWidth: 15,
        boxHeight: 15,
        // This more specific font property overrides the global property
        font: {
            family: 'Gilroy',
            size: 13,
            lineHeight: 15,
            wight: 300
        }
      }
    },
  },
  lineHeightAnnotation: {
    always: true,
    lineWeight: 1.5,
  },

  //   animate in
  animations: {
    tension: {
      duration: 1000,
      easing: 'linear',
      from: 1,
      to: 0,
      loop: false
    }
  },
  maintainAspectRatio: false,
  responsive: true,

  // show the x and y scales
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  }
}

export const BarConfig = {
  indexAxis: 'y',
  plugins: {
    // show legends for our graph
    legend: {
      display: false,
    },
  },
  lineHeightAnnotation: {
    always: true,
    lineWeight: 1.5,
  },

  //   animate in
  animations: {
    tension: {
      duration: 1000,
      easing: 'linear',
      from: 1,
      to: 0,
      loop: false
    }
  },
  maintainAspectRatio: false,
  responsive: true,

  // show the x and y scales
  scales: {
    x: {
      display: false
    },
    y: {
      grid: {
        display: false
      }
    }
  }
}