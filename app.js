// ctx is the context defined to work with the canvas tag [set a dimention for the graphic]
var ctxBar = document.getElementById("bar-chart");
var ctxLine = document.getElementById("line-chart");
var ctxRadar = document.getElementById("radar-chart");



// init the line-chart object [type, what kind of graphic; data, what's gonna be displayed; options, other global configs]

var chartGraph = new Chart(ctxBar, {
  //type
  type: 'bar',
  // data
  data: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Ago", "Set", "Out", "Nov", "Dez"],
    datasets: [
      {
        label: "Clicks - 2017",
        data: [5,10,5,14,20,15,6,14,8,12,15,5,10],
        borderWidth: 1,
        borderColor: 'rgba(77,166,253,0.85)',
        backgroundColor: 'transparent',
      },
      {
        label: "Clicks - 2018",
        data: [8,12,9,7,18,11,5,17,9,6,19,13,20],
        borderWidth: 1,
        borderColor: 'rgba(250,166,253,0.85)',
        backgroundColor: 'transparent',
      }
    ]
  },
  //options
  options: {
    title:{
      display: true,
      fontSize: 20,
      text: "Click Ratings"
    },
    labels:{
      fontStyle: "bold"
    }
  }
});

var chartGraph = new Chart(ctxLine, {
  type: 'line',
  data: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Ago", "Set", "Out", "Nov", "Dez"],
    datasets: [
      {
        label: "LineGraphic Clicks - 2017",
        data: [5,10,5,14,20,15,6,14,8,12,15,5,10],
        borderWidth: 1,
        borderColor: 'rgba(77,166,253,0.85)',
        backgroundColor: 'transparent',
      },
      {
        label: "LineGraphic Clicks - 2018",
        data: [8,12,9,7,18,11,5,17,9,6,19,13,20],
        borderWidth: 1,
        borderColor: 'rgba(250,166,253,0.85)',
        backgroundColor: 'transparent',
      }
    ]
  },
  options: {
    title:{
      display: true,
      fontSize: 20,
      text: "Click Ratings in Line",
    },
    labels: {
      fontStyle: "bold",
    }
  }
});

var chartGraph = new Chart(ctxRadar, {
  type: 'radar',
  data: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Ago", "Set", "Out", "Nov", "Dez"],
    datasets: [
      {
        label: "LineGraphic Clicks - 2017",
        data: [5,10,5,14,20,15,6,14,8,12,15,5,10],
        borderWidth: 1,
        borderColor: 'rgba(77,166,253,0.85)',
        backgroundColor: 'transparent',
      },
      {
        label: "LineGraphic Clicks - 2018",
        data: [8,12,9,7,18,11,5,17,9,6,19,13,20],
        borderWidth: 1,
        borderColor: 'rgba(250,166,253,0.85)',
        backgroundColor: 'transparent',
      }
    ]
  },
  options: {
    title:{
      display: true,
      fontSize: 20,
      text: "Click Ratings in Line",
    },
    labels: {
      fontStyle: "bold",
    }
  }
});
