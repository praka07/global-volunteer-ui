import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';

@Component({
  selector: 'app-system-administrator-report',
  templateUrl: './system-administrator-report.component.html',
  styleUrls: ['./system-administrator-report.component.css']
})
export class SystemAdministratorReportComponent implements OnInit {
  @ViewChild('mycanvas')
  pageCanvas: ElementRef<HTMLCanvasElement>;
  public context: CanvasRenderingContext2D;
  barChart: Chart;

  constructor(private service: GlobalVolunteerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getReport().subscribe(res => {
      console.log(' -- Report ---', res);
      this.plotChart(res);

    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    })
  }
  ngAfterViewInit() {
    this.context = this.pageCanvas.nativeElement.getContext('2d');
  }

  plotChart(data: any) {
    let xAxes = [];
    let yAxes = [];

    data.forEach(element => {
      xAxes.push(element['activityName']);

    });
    data.forEach(element => {
      yAxes.push(element['volunteerCount']);
    })
    console.log('activityName,xAxes', xAxes);
    console.log('volunteerCount, yAxes', yAxes);
    let chartData = {
      labels: xAxes,
      datasets: [{

        data: yAxes,

        barThickness: 20,

        backgroundColor: [
          "#0000CC",
          "#CC00CC",
          "#606060",
          "#3399FF",
          "#CC0000",
          "#006600",
          "#FF8000",
          "#FF33FF",
          "#999900"
        ],

        fill: true
      }]

    };

    if (this.barChart) {
      this.barChart.data.datasets = [];
      this.barChart.reset();
    }
    this.barChart = new Chart(this.context, {
      type: 'bar',
      data: chartData,
      options: {

        responsive: true,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{

            scaleLabel: {
              display: true,
              labelString: 'Activity Name',
              fontStyle: 'bold',
              fontColor: 'black'
            },
            gridLines: {
              drawOnChartArea: false
            }
          }],
          yAxes: [{

            ticks: { min: 0 },
            scaleLabel: {
              display: true,
              labelString: 'Volunteer Count',
              fontStyle: 'bold',
              fontColor: 'black'
            },
            gridLines: {
              drawOnChartArea: false
            }
          }],
        }
      }
    });
  }
}
