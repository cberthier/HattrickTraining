<script>
import { Radar } from "vue-chartjs";

export default {
  name: "RadarChartPlayer",
  props: ["chart"],
  extends: Radar,
  methods: {
    hexToRgbA(hex) {
      var c;
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split("");
        if (c.length == 3) {
          c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = "0x" + c.join("");
        return (
          "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",0.3)"
        );
      }
      throw new Error("Bad Hex");
    }
  },
  mounted() {
    this.renderChart(
      {
        labels: [
          "Keeper",
          "Defending",
          "Playmaking",
          "Winger",
          "Passing",
          "Scoring",
          "Free kick"
        ],
        datasets: [
          {
            label: "Now",
            data: [0, 2, 0, 0, 4, 0, 0],
            backgroundColor: this.chart.backgroundColorNow,
           borderColor: this.chart.backgroundColorNow,
            pointStyle: "line"
          },
          {
            label: "Futur",
            data: [2, 5, 5, 7, 4, 3, 2],
            backgroundColor: this.hexToRgbA(this.chart.backgroundColorNow), //this.chart.backgroundColorFutur
            borderColor: this.chart.backgroundColorNow
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          labels: {
            fontColor: "#FFFFFF",
            fontSize: 18
          }
        },
      tooltips:{
        mode: 'index',
        intersect: false,
        axis: 'xy'
      },
        scale: {
          display: true,
          gridLines: {
            color: "#FFF"
          },
          angleLines: {
            color: "#FFF"
          },
          ticks: {
            stepSize: 1,
            suggestedMin: -1,
            showLabelBackdrop: false
          },
          pointLabels: {
            fontColor: this.chart.backgroundColorNow,
            fontSize: 12
          }
        }
      }
    );
  }
};
</script>
