import { Component, OnInit } from '@angular/core';
import {Menu} from '../models/menu.model';
import {TypeReleveService} from '../services/type-releve.service';
import {TypeReleve} from '../models/typeReleve.model';
import {
  ChartErrorEvent,
  ChartMouseLeaveEvent,
  ChartMouseOverEvent,
  ChartSelectionChangedEvent,
  ChartType,
  Column,
  GoogleChartComponent
} from 'angular-google-charts';

@Component({
  selector: 'app-analyse-page',
  templateUrl: './analyse-page.component.html',
  styleUrls: ['./analyse-page.component.css']
})
export class AnalysePageComponent implements OnInit {
  public charts: {
    title: string;
    type: ChartType;
    data: any[][];
    columns?: Column[];
    options: {};
  }[] = [];

  typeReleves: TypeReleve[];
  navElems: Menu;
  connected: boolean;
  errorMessage: string;

  constructor(private typeReleveService: TypeReleveService) {
    this.typeReleves = [];
    this.navElems = {accueil: false, releves: false, analyses: true, profil: false};
    this.connected = sessionStorage?.getItem('id') !== null;
    this.errorMessage = 'Vous êtes déconnecté. Veuillez vous connecter afin d\'accéder à cette page';
  }

  ngOnInit(): void {
  	this.getTypeReleves();

    this.charts.push({
      title: 'Evolution des relevés',
      type: ChartType.LineChart,
      columns: [
        'Date',
        'Valeur',
        'Danger. Appelez les urgences.',
        'Etat de santé stable.',
        'A surveiller. Consulter votre médecin.',
        'Danger. Appelez les urgences.'
      ],
      data: [
        [new Date('03/17/2020'), 125, 100, 140, 160, 200],
        [new Date('04/17/2020'), 120, 100, 140, 160, 200],
        [new Date('05/17/2020'), 110, 100, 140, 160, 200],
        [new Date('06/17/2020'), 105, 100, 140, 160, 200],
        [new Date('07/17/2020'), 90, 100, 140, 160, 200],
        [new Date('08/17/2020'), 85, 100, 140, 160, 200],
        [new Date('09/17/2020'), 90, 100, 140, 160, 200],
        [new Date('10/17/2020'), 100, 100, 140, 160, 200],
        [new Date('11/17/2020'), 115, 100, 140, 160, 200],
        [new Date('12/17/2020'), 130, 100, 140, 160, 200],
        [new Date('01/17/2021'), 145, 100, 140, 160, 200],
        [new Date('02/17/2021'), 155, 100, 140, 160, 200],
        [new Date('03/17/2021'), 165, 100, 140, 160, 200]
      ],
      options: {
        colors: ['blue', 'red', 'green', 'orange', 'red'],
        series: {
          0: {
            lineWidth: 3
          },
          1: {
            lineWidth: 2,
            lineDashStyle: [2, 2]
          },
          2: {
            lineWidth: 2,
            lineDashStyle: [2, 2]
          },
          3: {
            lineWidth: 2,
            lineDashStyle: [2, 2]
          },
          4: {
            lineWidth: 2,
            lineDashStyle: [2, 2]
          }
        }
      }
    });

    var data = [
      [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
      [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
      [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
      [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
      [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
      [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
      [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
      [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
      [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
      [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
      [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
      [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
    ];
    
    this.charts.push({
      title: 'Styled Line Chart',
      type: ChartType.LineChart,
      columns: [
        'Element',
        'Density',
        'aya'
      ],
      data: data,
      options: {}
    });

    this.charts.push({
      title: 'Styled Line Chart',
      type: ChartType.LineChart,
      columns: [
        'Element',
        'Density',
        { type: 'number', role: 'interval' },
        { type: 'number', role: 'interval' },
        { type: 'string', role: 'annotation' },
        { type: 'string', role: 'annotationText' },
        { type: 'boolean', role: 'certainty' }
      ],
      data: [
        ['April', 1000, 900, 1100, 'A', 'Stolen data', true],
        ['May', 1170, 1000, 1200, 'B', 'Coffee spill', true],
        ['June', 660, 550, 800, 'C', 'Wumpus attack', true],
        ['July', 1030, null, null, null, null, false]
      ],
      options: {}
    });
  }

  getTypeReleves(): void{
    this.typeReleveService.getTypeReleves().subscribe((typeReleves) => {
      this.typeReleves = typeReleves;
    });
  }

}
