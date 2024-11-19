(function ($) {
  /* "use strict" */

  var tfChart = (function () {
    var donutChart1 = function () {
      var options = {
        series: [50, 18, 17, 15],
        colors: ["#873B0A", "#FF8A00", "#1E7F11", "#E7E7E7"],
        chart: {
          width: 400,
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
          opacity: 1,
        },
        stroke: {
          width: 0,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                },
              },
            },
          },
        },
        labels: ["Item 01", "Item 02", "Item 03", "Item 04"],

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 303,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };

      var chart = new ApexCharts(
        document.querySelector("#donut-chart"),
        options
      );
      chart.render();
    };
    var donutChart2 = function () {
      var options = {
        series: [44, 55, 13, 43],
        colors: ["#E38B52", "#FFCB8D", "#26ADE4", "#68EE76"],

        chart: {
          width: 380,
          type: "donut",
        },
        stroke: {
          width: 0,
        },
        dataLabels: {
          enabled: false,
        },

        labels: ["Item1", "Item2", "Item3", "Item4"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 303,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };

      var chart = new ApexCharts(document.querySelector("#donut-chart2"), options);
      chart.render();
    };

    var barChart1 = function () {
      var options = {
        series: [
          {
            name: "Item1",
            data: [15, 30, 50, 35, 10, 50, 30],
            color: "#E17E3E",
          },
          {
            name: "Item2",
            data: [20, 45, 70, 60, 15, 70, 45],
            color: "#873B0A",
          },
        ],
        chart: {
          type: "bar",
          height: 270,
          toolbar: {
            show: false,
          }
        },

        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"],
        },
        tooltip: {
          shared: true,
          intersect: false,
        },
        xaxis: {
          categories: ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"],
        },
      };

      var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
      chart.render();
    };

    var areaChart1 = function () {
      var options = {
        series: [
          {
            name: "series1",
            data: [50, 55, 48, 57, 55, 60],
            color: "#E17E3E",
          },
        ],
        chart: {
          height: 220,
          type: "area",
          toolbar: {
            show: false,
          },
          sparkline: {
            enabled: false,
          },
        },

        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        },
      };

      var chart = new ApexCharts(
        document.querySelector("#area-chart"),
        options
      );
      chart.render();
    };

    /* Function ============ */
    return {
      init: function () {},

      load: function () {
        donutChart1();
        donutChart2();
        barChart1();
        areaChart1();
      },
      resize: function () {},
    };
  })();

  jQuery(document).ready(function () {});

  jQuery(window).on("load", function () {
    tfChart.load();
  });

  jQuery(window).on("resize", function () {});
})(jQuery);
