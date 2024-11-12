import { AfterViewInit, Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-hourlyseals',
  templateUrl: './hourlyseals.component.html',
  styleUrl: './hourlyseals.component.css'
})
export class HourlysealsComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.createRadarChart();
  }

  createRadarChart() {
    const canvas = document.getElementById('hourlySalesChart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');

    // تأكد من أن `ctx` ليس null قبل إنشاء المخطط
    if (ctx) {
      new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
          datasets: [
            {
              label: 'Sales Volume',
              data: [30, 50, 60, 80, 50, 40, 30],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            r: {
              beginAtZero: true
            }
          }
        }
      });
    } else {
      console.error('Canvas context not found.');
    }
  }
}
