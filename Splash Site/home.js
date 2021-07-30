var water = 400;

window.addEventListener("load", function(){
    // var data = JSON.parse("names.json");
    // var name = data(Object.keys(data).length].uname;
    var name = localStorage.getItem("uname");
    document.getElementById("output").innerHTML = "Hey, " + name + "!";
    update_water_values();
})

function update_water_values(){
    document.getElementById("beeg").innerHTML = water.toString() + " litres";
    let saved = parseInt(water / 159);
    document.getElementById("save").innerHTML = saved.toString() + " barrels";
    // hide.style.display = "block" to show and "none" to hide
    var hide1 = document.getElementById("hide1");
    var hide2 = document.getElementById("hide2");
    if (water <= 159*3){
        hide1.style.display = "none";
    }
    else {
        hide1.style.display = "inline";
    }
    if (water <= 159*2){
        hide2.style.display = "none";
    }
    else {
        hide2.style.display = "inline";
    }
}

function update(){
    let val = getRandomInt(2);
    if (val == 0){
        if (water-100 > 159){
            water -= 100;
        }
        else {
            water += 100;
        }
    }
    else {
        if (water+100 < 159*4){
            water += 100;
        }
        else {
            water -= 100;
        }
    }
    //alert(water); // DEBUG VAL
    update_water_values();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Update: Edited existing line graph to update from csv file

/*

let myChart = document.getElementById('myChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontsize = 18;
Chart.defaults.global.defaultFontColor = 'aqua';

let PrPopChart = new Chart(myChart, {
type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
    labels:['07-26', '07-27', '07-28', '07-29', '07-30', '07-31', '08-01'],
    datasets:[{
    label:'Water Usage (Litres)',
    data:[
        400,
        350,
        380,
        320,
        500,
        480,
        550,
        500
    ],
    // backgroundColor: 'green',
    backgroundColor:[
        '#e65100',
        '#e65100',
        '#f57c00',
        '#fb8c00',
        '#ff9800',
        '#ffa726',
        '#ffb74d',
        '#ffcc80',
        '#ffe0b2',
        '#fff3e0'
    ],
    borderWidth:1,
    borderColor:'white',
    hoverBorderWidth: 3,
    hoverBorderColor: 'grey'
    }]
},
options:{
    title:{
    display: false,
    fontSize:25,
    },
    legend:{
    display:true,
    position:'right',
    labels:{
        fontColor: '#000'
    }
    },
    layout:{
    padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
    }
    }
}
});
*/

var TITLE = 'Water Usage Tracked Across A Week';

// x-axis label and label in tooltip
var X_AXIS = 'Date';

// y-axis label and label in tooltip
var Y_AXIS = 'Water Usage'; 

// Should y-axis start from 0? `true` or `false`
var BEGIN_AT_ZERO = true;

// `true` to show the grid, `false` to hide
var SHOW_GRID = true;

 // `true` to show the legend, `false` to hide
var SHOW_LEGEND = true;

$(document).ready(function() {

  // Read data file with random string generated by current time
  // to bypass browser cache, and create chart
  $.get('https://raw.githubusercontent.com/Bobliuuu/Splash/main/data.csv', {'_': $.now()}, function(csvString) {

    var data = Papa.parse(csvString).data;
    var timeLabels = data.slice(1).map(function(row) { return row[0]; });

    var datasets = [];
    for (var i = 1; i < data[0].length; i++) {
      datasets.push(
        {
          label: data[0][i], // column name
          data: data.slice(1).map(function(row) {return row[i]}), // data in that column
          fill: false // `true` for area charts, `false` for regular line charts
        }
      )
    }

    // Get container for the chart
    var ctx = document.getElementById('chart-container').getContext('2d');

    new Chart(ctx, {
      type: 'line',

      data: {
        labels: timeLabels,
        datasets: datasets,
      },
      
      options: {
        title: {
          display: true,
          text: TITLE,
          fontSize: 14,
        },
        legend: {
          display: SHOW_LEGEND,
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            scaleLabel: {
              display: X_AXIS !== '',
              labelString: X_AXIS
            },
            gridLines: {
              display: SHOW_GRID,
            },
            ticks: {
              maxTicksLimit: 10,
              callback: function(value, index, values) {
                return value.toLocaleString();
              }
            }
          }],
          yAxes: [{
            stacked: false, // `true` for stacked area chart, `false` otherwise
            beginAtZero: true,
            scaleLabel: {
              display: Y_AXIS !== '',
              labelString: Y_AXIS
            },
            gridLines: {
              display: SHOW_GRID,
            },
            ticks: {
              maxTicksLimit: 10,
              beginAtZero: BEGIN_AT_ZERO,
              callback: function(value, index, values) {
                return value.toLocaleString()
              }
            }
          }]
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            label: function(tooltipItem, all) {
              return all.datasets[tooltipItem.datasetIndex].label
                + ': ' + tooltipItem.yLabel.toLocaleString();
            }
          }
        },
        plugins: {
          colorschemes: {
            /*
              Replace below with any other scheme from
              https://nagix.github.io/chartjs-plugin-colorschemes/colorchart.html
            */
            scheme: 'brewer.DarkTwo5'
          }
        }
      }
    });

  });

});

