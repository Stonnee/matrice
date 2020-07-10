import { getService } from './../../service/get.service';
import { PolygonChart } from 'C:/Users/axelc/OneDrive/Bureau/linux/matrice/front/src/public/PolygonChart.js-master/dist/PolygonChart.umd.js';

import { Component, OnInit, Input } from '@angular/core';
import { promise } from 'protractor';

declare var PolygonChart: any;

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {

  colomn:any;
  chart: any;

constructor(private get:getService){}

  ngOnInit(): void {

    this.promise();

  }



 async promise(){
    this.colomn = await this.get.getStatsFromServer();

    var value = [];
this.colomn.forEach(element => {
  element.value /= 100;
      value.push(element.value);
    });

    
    let element = document.getElementById('polygon-chart');
    this.chart = new PolygonChart({ target: element,
      radius: 200,
      data: {
        data: [
          value
        ],
        sides: this.colomn.length,
        tooltips: {
          roundTo: 2,
          percentage: true,
        },
        colors: {
          normal: {
              //ligne
            polygonStroke: "#D8AB1F",
            // deu lettre de fin transparent
            polygonFill: "#16E8D64f",
            pointStroke: "transparent",
            //point
            pointFill: "#D8AB1F",
          },
          onHover: {
            polygonStroke: "#A54AE9",
            polygonFill: "rgba(0,0,0,0.3)",
            pointStroke: "#A54AE9",
            pointFill: "#fff",
          },
        },
      },
      polygon: {
        colors: {
          normal: {
              //full
            fill: "#004A48",
            //file
            stroke: "#2ED1CC",
          },
          onHover: {
            fill: "#231E2C",
            stroke: "#993DE0",
          }
        }
      },
      levels: {
        count: 10,
        labels: {
          enabled: true,
          position: {
            spline: 2,
            quadrant: 0,
          },
          colors: {
            normal: "#000000",
            onHover: "#A54AE9",
          },
        },
      },
    });
    this.chart.init();
  }

}
