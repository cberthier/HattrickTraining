<script>
import { Line } from "vue-chartjs";

export default {
  name: "EvolutionCard",
  props: ["chart"],
  extends: Line,
  mounted () {
    this.renderChart({
      datasets: [
        {
          label: 'Keeper',
          //steppedLine: true,
          data: [
            {x: '2019-01-02', y:0},
            {x: '2019-01-09', y:0},
            {x: '2019-01-16', y:1},
            {x: '2019-01-24', y:1},
            {x: '2019-01-31', y:1},
            {x: '2019-02-07', y:1},
            {x: '2019-02-14', y:1},
            {x: '2019-02-21', y:2},
            {x: '2019-02-28', y:2}
          ],
          borderColor: '#FFCA2A',
          backgroundColor: '#FFCA2A',
          fill: false
        },
        {
          label: 'Defending',
          //steppedLine: true,
          data: [
            {x: '2019-01-02', y:5},
            {x: '2019-01-09', y:5},
            {x: '2019-01-16', y:5},
            {x: '2019-01-24', y:5},
            {x: '2019-01-31', y:5},
            {x: '2019-02-07', y:5},
            {x: '2019-02-14', y:6},
            {x: '2019-02-21', y:6},
            {x: '2019-02-28', y:6}
          ],
          borderColor: '#4eff2a',
          backgroundColor: '#4eff2a',
          fill: false
        },
        {
          label: 'Playmaking',
          //steppedLine: true,
          data: [
            {x: '2019-01-02', y:3},
            {x: '2019-01-09', y:3},
            {x: '2019-01-16', y:3},
            {x: '2019-01-24', y:3},
            {x: '2019-01-31', y:3},
            {x: '2019-02-07', y:3},
            {x: '2019-02-14', y:3},
            {x: '2019-02-21', y:3},
            {x: '2019-02-28', y:3}
          ],
          borderColor: '#2affff',
          backgroundColor: '#2affff',
          fill: false
        },
        {
          label: 'Winger',
          //steppedLine: true,
          data: [
            {x: '2019-01-02', y:4},
            {x: '2019-01-09', y:4},
            {x: '2019-01-16', y:4},
            {x: '2019-01-24', y:4},
            {x: '2019-01-31', y:4},
            {x: '2019-02-07', y:4},
            {x: '2019-02-14', y:4},
            {x: '2019-02-21', y:4},
            {x: '2019-02-28', y:4}
          ],
          borderColor: '#2a33ff',
          backgroundColor: '#2a33ff',
          fill: false
        },
        {
          label: 'Passing',
          //steppedLine: true,
          data: [
            {x: '2019-01-02', y:4},
            {x: '2019-01-09', y:4},
            {x: '2019-01-16', y:5},
            {x: '2019-01-24', y:5},
            {x: '2019-01-31', y:5},
            {x: '2019-02-07', y:5},
            {x: '2019-02-14', y:5},
            {x: '2019-02-21', y:5},
            {x: '2019-02-28', y:5}
          ],
          borderColor: '#e12aff',
          backgroundColor: '#e12aff',
          fill: false
        },
        {
          label: 'Scoring',
          //steppedLine: true,
          data: [
            {x: '2019-01-02', y:3},
            {x: '2019-01-09', y:3},
            {x: '2019-01-16', y:3},
            {x: '2019-01-24', y:3},
            {x: '2019-01-31', y:3},
            {x: '2019-02-07', y:3},
            {x: '2019-02-14', y:3},
            {x: '2019-02-21', y:3},
            {x: '2019-02-28', y:3}
          ],
          borderColor: '#ff2a90',
          backgroundColor: '#ff2a90',
          fill: false
        },
        {
          label: 'Free kick',
          //steppedLine: true,
          data: [
            {x: '2019-01-02', y:4},
            {x: '2019-01-09', y:4},
            {x: '2019-01-16', y:4},
            {x: '2019-01-24', y:4},
            {x: '2019-01-31', y:4},
            {x: '2019-02-07', y:4},
            {x: '2019-02-14', y:4},
            {x: '2019-02-21', y:4},
            {x: '2019-02-28', y:4}
          ],
          borderColor: '#ff2a2a',
          backgroundColor: '#ff2a2a',
          fill: false
        }
      ]
    },
    {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        labels: {
          fontColor: "white",
          fontSize: 18
        }
      },
      tooltips:{
        mode: 'index',
        intersect: false
      },
      scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'day'
                },
                gridLines: {
                  color: 'rgba(255, 255, 255, 1)'
                },
                ticks: {
                      fontColor: "white",
                      fontSize: 14
                }
            }],
            yAxes:[{
              gridLines: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              ticks: {
                stepSize: 1,
                min: 0,
                max: 20,
                fontColor: "white",
                fontSize: 14
              }
            }]
        }
    })
    }
};
</script>
