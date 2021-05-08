// Load google charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 12],
        ['Eat', 1],
        ['Gym', 1],
        ['Sleep', 10]
    ]);

    var options = {
        'title': 'A day in life',
        'width': 400,
        'height': 200
    };

    // Display the chart inside the <div> element with id="chart"
    var chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(data, options);
}


// tabs

var tabBtn = document.querySelectorAll('.tabBtns button');
var tabContent = document.querySelectorAll('.tab-content');




$(document).ready(function() {

    document.querySelectorAll('.tabBtns button').forEach(item => {
        item.addEventListener('click', event => {
            for (let i = 0; i < tabContent.length; i++) {
                tabContent[i].style.display = "none";
                tabBtn[i].classList.remove("active");
            }
            for (let i = 0; i < tabBtn.length; i++) {
                if (tabBtn[i] == item) {
                    tabContent[i].style.display = "table";
                    tabBtn[i].classList.add("active");
                }
            }
        })
    })

    $('.tabBtns button:first-child').trigger('click');
})