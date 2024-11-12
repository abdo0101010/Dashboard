import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent {
  selectedTab: string = 'Sales';

  ngAfterViewInit() {
    this.createBarChart();
  }

  createBarChart() {
    const canvas = document.getElementById('salesChart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');

    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Station Name Dummy 1', 'Station Name Dummy 1', 'Station Name Dummy 1', 'Station Name Dummy 1'],
          datasets: [
            {
              label: 'Sales Volume',
              data: [250, 100, 200, 150],
              backgroundColor: 'rgba(255, 99, 71, 0.6)',
              borderColor: 'rgba(255, 99, 71, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 300
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
