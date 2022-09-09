// CanvaJs Chart Script

window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Trenutno Stanje Knjiga",
    },
    axisY: {
      suffix: "%",
    },

    data: [
      {
        type: "column",
        yValueFormatString: '#,##0.0#"%"',
        dataPoints: [
          { label: "Izdate", y: 71 },
          { label: "Vracene", y: 67 },
          { label: "Prekoracenju", y: 50 },
          { label: "Aktivne", y: 56 },
          { label: "Arhivirane", y: 30 },
        ],
      },
    ],
  });
  chart.render();
};
