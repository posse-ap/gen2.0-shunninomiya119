"use strict";
// ドーナツグラフ
var ctx = document.getElementById("donutChart1");
var donutChart1 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            backgroundColor: [
                "#3C00FF",
                "#4682b4",
                "#6495ed",
                "#00bfff",
                "#7b68ee",
                "#4b0082",
                "#6a5acd",
                "#000080"

            ],
            data: [30, 10, 5, 15, 3, 3, 7, 7]
        }]
    },
    
    options: {
        responsive: true, 
        plugins: {
            labels: {
              render: 'percentage',
              fontColor: 'white',
              fontSize: 10
            }
          }
    },
});

var ctx= document.getElementById("donutChart2");
var donutChart2 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            backgroundColor: [
                "#3C00FF",
                "#4682b4",
                "#6495ed"

            ],
            data: [15, 30, 40]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            labels: {
              render: 'percentage',
              fontColor: 'white',
              fontSize: 10
            }
          }
    }
});