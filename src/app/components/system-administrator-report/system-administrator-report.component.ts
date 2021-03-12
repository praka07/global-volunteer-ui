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

  constructor(private service: GlobalVolunteerService,private toastr:ToastrService) { }

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
    let labels = [];
    let yAxes = [];

    if (this.barChart) {
      this.barChart.data.datasets = [];
      this.barChart.reset();
    }
  }
}
