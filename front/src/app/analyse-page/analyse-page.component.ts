import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/menu.model';
import { UtilisateurService } from '../services/utilisateur.service';
import { TypeReleve } from '../models/typeReleve.model';
import { Releve, ComplexeReleve } from '../models/releve.model';
import {
  ChartType,
  Column,
  GoogleChartComponent
} from 'angular-google-charts';
import { AnalyseService } from '../services/analyse.service';

const ANIMATION_DURATION = 1500;
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
    options: {
      colors: string[];
      series: {};
      animation: {};
    };
  }[] = [];
  public chartValues: {
    [idType: string]:
    {
      data: any[][];
      columns: Column[];
      colors: string[];
      series: any;
    }
  } = {};

  releves?: ComplexeReleve[];
  id: string | null;
  typeReleves: TypeReleve[];
  navElems: Menu;
  connected: boolean;
  errorMessage: string;
  idTypeSelected: string;

  constructor(private analyseService: AnalyseService, private utilisateurService: UtilisateurService) {
    this.typeReleves = [];
    this.id = sessionStorage?.getItem('id');
    this.navElems = { accueil: false, releves: false, analyses: true, profil: false };
    this.connected = sessionStorage?.getItem('id') !== null;
    this.errorMessage = 'Vous êtes déconnecté. Veuillez vous connecter afin d\'accéder à cette page';
    this.idTypeSelected = '-1';
  }

  ngOnInit(): void {
    this.getReleves();

    this.charts.push({
      title: 'Evolution des relevés',
      type: ChartType.LineChart,
      columns: [],
      data: [],
      options: {
        colors: [],
        series: {},
        animation: {
          duration: ANIMATION_DURATION,
          startup: true
        }
      }
      // columns: this.chartValues[this.idType]['columns'],
      // data: this.chartValues[this.idType]['data'],
      // options.colors: this.chartValues[this.idType]['colors'],
      // options.series: this.chartValues[this.idType]['colors']
    });

    this.charts.push({
      title: 'Evolution des relevés HARDCODED',
      type: ChartType.LineChart,
      columns: [
        'Date',
        'Valeur',
        'Danger. Appelez les urgences.',
        'A surveiller. Consulter votre médecin.',
        'Danger. Appelez les urgences.'
      ],
      data: [
        [new Date('03/17/2020'), 125, 100, 140, 160],
        [new Date('04/17/2020'), 120, 100, 140, 160],
        [new Date('05/17/2020'), 110, 100, 140, 160],
        [new Date('06/17/2020'), 105, 100, 140, 160],
        [new Date('07/17/2020'), 90, 100, 140, 160],
        [new Date('08/17/2020'), 85, 100, 140, 160],
        [new Date('09/17/2020'), 90, 100, 140, 160],
        [new Date('10/17/2020'), 100, 100, 140, 160],
        [new Date('11/17/2020'), 115, 100, 140, 160],
        [new Date('12/17/2020'), 130, 100, 140, 160],
        [new Date('01/17/2021'), 145, 100, 140, 160],
        [new Date('02/17/2021'), 155, 100, 140, 160],
        [new Date('03/17/2021'), 165, 100, 140, 160]
      ],
      options: {
        colors: ['blue', 'red', 'orange', 'red'],
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
          }
        },
        animation: {
          duration: ANIMATION_DURATION,
          startup: true
        }
      }
    });

    var data = [
      [0, 0, 0], [1, 10, 5], [2, 23, 15], [3, 17, 9], [4, 18, 10], [5, 9, 5],
      [6, 11, 3], [7, 27, 19], [8, 33, 25], [9, 40, 32], [10, 32, 24], [11, 35, 27],
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
      options: {
        colors: ['blue', 'red'],
        series: {},
        animation: {
          duration: ANIMATION_DURATION,
          startup: true
        }
      }
    });
  }

  changeData(): void {
    this.charts[this.charts.length - 1].data = [
      [0, 0, 0], [1, 10, 5], [2, 23, 15], [3, 17, 9], [4, 18, 10], [5, 9, 5],
      [6, 11, 3], [7, 27, 19], [8, 33, 25], [9, 40, 32], [10, 32, 24], [11, 35, 27],
      [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
      [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
      [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
      [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
      [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
      [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
      [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
      [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
      [60, 64, 56], [61, 60, 52], [62, 65, 53], [63, 67, 65], [64, 68, 70], [65, 69, 65],
      [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
    ];
  }

  getReleves(): void {
    this.cursor("wait");
    this.utilisateurService.getUserReleves(this.id).subscribe((releves) => {
      this.releves = releves.complexesReleves;
      this.cursor("initial");
      console.log(this.releves);
      releves.complexesReleves.forEach(complexeReleve => {
        const idType: number = complexeReleve.releve.TypeReleve.id
        const releve: Releve = complexeReleve.releve
        if (!this.typeReleves.some(e => e.id === idType)) {
          if(this.idTypeSelected === '-1') {
            this.idTypeSelected = "" + idType;
          }
          this.typeReleves.push(releve.TypeReleve);
          this.chartValues[idType] = {
            data: [],
            columns: [
              'Date',
              'Valeur'],
            colors: ['blue'],
            series: {
              0: {
                lineWidth: 3
              }
            }
          }
        }
        this.chartValues[idType]['data'].push([releve.prise_de_mesure, releve.valeur]);
      });
      console.log(this.chartValues);
      console.log(this.charts[0]);
      this.idTypeSelected = '1';
      this.applyChartValuesOnMain();
      console.log(this.charts[0]);
      console.log(this.charts[1]);
      this.typeReleves.forEach(typeReleve => {
        this.analyseService.getAnalyseByReleveType(typeReleve.id).subscribe((analyses) => {
          let count = 1;
          for(let i in analyses) {
            const analyse = analyses[i];
            this.chartValues[typeReleve.id]['columns'].push(analyse.Dangerosite.message);
            this.chartValues[typeReleve.id]['colors'].push(analyse.Dangerosite.Couleur.label);
            this.chartValues[typeReleve.id]['series'][count++] = {lineWidth: 1, lineDashStyle: [2, 2]};
            if(analyse.Dangerosite.Couleur.id != 3) {
              this.chartValues[typeReleve.id]['columns'].push(analyse.Dangerosite.message);
              this.chartValues[typeReleve.id]['colors'].push(analyse.Dangerosite.Couleur.label);
              this.chartValues[typeReleve.id]['series'][count++] = {lineWidth: 1, lineDashStyle: [2, 2]};
            }
            this.chartValues[typeReleve.id]['data'].forEach(d => {
              if(analyse.Dangerosite.Couleur.id == 3) {
                if(analyse.mini == 0) {
                  d.push(analyse.maxi)
                } else {
                  d.push(analyse.mini)
                }
              } else {
                d.push(analyse.mini)
                d.push(analyse.maxi)
              }
            });
          }
        })
      });
    });
  }

  changeType() {
    this.applyChartValuesOnMain();
    console.log("HEY");
  }

  applyChartValuesOnMain(): void {
    const mainChart = this.charts[0];
    console.log(this.idTypeSelected);
    if(this.idTypeSelected !== '-1') {
      mainChart.data = this.chartValues[this.idTypeSelected]['data'];
      mainChart.columns = this.chartValues[this.idTypeSelected]['columns'];
      mainChart.options.colors = this.chartValues[this.idTypeSelected]['colors'];
      mainChart.options.series = this.chartValues[this.idTypeSelected]['series'];
    }
  }

  cursor(cursorType: string) {
    document.getElementsByTagName("body")[0].style.cursor = cursorType;
  }
}
