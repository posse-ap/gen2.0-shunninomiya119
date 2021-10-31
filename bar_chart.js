"use strict";
// 棒グラフの作成
var ctx = document.getElementById("BarChart");
var BarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [, '2', , '4', , '6', , '8', , '10', , '12', , '14', , '16', , '18', , '20', , '22', , '24', , '26', , '28', , '30', ,],
        datasets: [
            {
                data: [2, 5, 5, 3, 8, 5, 6, 7, 8, 6, 2, 7, 3, 7, 6, 3, 2, 5, 6, 7, 4, 2, 1, 8, 6, 4, 4, 5, 4, 8, 3],
                backgroundColor: "#3ccfff",
            }
        ]
    },
    options: {
        // labelの非表示
        legend: {
            display: false,
        },
        responsive: true,
        plugins: {
            labels: {
              
            }
          },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],

            yAxes: [{
                ticks: {
                    suggestedMax: 8,
                    suggestedMin: 0,
                    stepSize: 2,
                    callback: function (value, index, values) {
                        return value + 'h'
                    }
                },
                gridLines: {
                    display: false
                }
            }]
        },
    }
});