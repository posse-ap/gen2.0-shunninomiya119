"use strict";

const modal = document.getElementById('modal');
const button = document.getElementById('record_post_button');
const header = document.getElementById('header');
const main = document.getElementById('main');


// モーダル画面の表示
function display_modal() {
    modal.style.display = 'block';
};

button.addEventListener('click', display_modal);

// モーダル画面の非表示
const modal_close_button = document.getElementById('modal_close_button');

function close_modal() {
    modal.style.display = 'none';
};

modal_close_button.addEventListener('click', close_modal);


// 棒グラフの作成
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [, '2', , '4', , '6', , '8', , '10', , '12', , '14', , '16', , '18', , '20', , '22', , '24', , '26', , '28', , '30', ,],
        datasets: [
            {
                data: [2, 5, 5, 3, 8, 5, 6, 7, 8, 6, 2, 7, 3, 7, 6, 3, 2, 5, 6, 7, 4, 2, 1, 8, 6, 4, 4, 5, 4, 8, 3],
                backgroundColor: "#3ccfff"
            }
        ]
    },
    options: {
        // labelの非表示
        legend: {
            display: false
        },
        //  ウィンドウ幅でグラフが小さくなるのを防ぐ
        maintainAspectRatio: false,

        scales: {
            xAxes: [{
                display: true,
                stacked: false,
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
            }]
        },
    }
});

// ドーナツグラフ
var ctx = document.getElementById("myPieChart1");
var myPieChart = new Chart(ctx, {
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
            data: [42, 18, 10, 9, 7, 6, 5, 3]
        }]
    },
    options: {
        // maintainAspectRatio: false,
    }
});

var ctx = document.getElementById("myPieChart2");
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            backgroundColor: [
                "#3C00FF",
                "#4682b4",
                "#6495ed"

            ],
            data: [42, 33, 25]
        }]
    },
    options: {
        // maintainAspectRatio: false,
    }
});