import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/menu.model';
import { UtilisateurService } from '../services/utilisateur.service';
import { TypeReleve } from '../models/typeReleve.model';
import { Releve, ComplexeReleve } from '../models/releve.model';
import { ChartType, Column } from 'angular-google-charts';
import { AnalyseService } from '../services/analyse.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const ANIMATION_DURATION = 1500;
const RED_COLOR_ID = 3;
@Component({
  selector: 'app-analyse-page',
  templateUrl: './analyse-page.component.html',
  styleUrls: ['./analyse-page.component.css']
})
export class AnalysePageComponent implements OnInit {
  public chart: {
    title: string;
    type: ChartType;
    data: any[][];
    columns?: Column[];
    options: {
      legend: {};
      colors: string[];
      series: {};
      animation: {};
    };
  } = {
    title: 'Evolution des relevés',
    type: ChartType.LineChart,
    columns: [],
    data: [],
    options: {
      legend: {
        position: 'none'
      },
      colors: [],
      series: {},
      animation: {
        duration: ANIMATION_DURATION,
        startup: true,
        easing: 'inAndOut'
      },
    }
  };
  public chartValues: {
    [idType: string]:
    {
      data: any[][];
      columns: Column[];
      colors: string[];
      series: any;
    }
  } = {};

  id: string | null;
  typeReleves: TypeReleve[];
  analyseForm: FormGroup;
  navElems: Menu;
  connected: boolean;
  errorMessage: string;
  idTypeSelected: string;

  constructor(private fb: FormBuilder, private analyseService: AnalyseService, private utilisateurService: UtilisateurService) {
    this.typeReleves = [];
    this.id = sessionStorage?.getItem('id');
    this.navElems = { accueil: false, releves: false, analyses: true, profil: false };
    this.connected = sessionStorage?.getItem('id') !== null;
    this.errorMessage = 'Vous êtes déconnecté. Veuillez vous connecter afin d\'accéder à cette page';
    this.idTypeSelected = '-1';
    this.analyseForm = this.fb.group({
      TypeReleveId: ['1', Validators.required]
    });
  }

  ngOnInit(): void {
    this.chart = {
      title: 'Evolution des relevés',
      type: ChartType.LineChart,
      columns: [],
      data: [],
      options: {
        legend: {
          position: 'none'
        },
        colors: [],
        series: {},
        animation: {
          duration: ANIMATION_DURATION,
          startup: true,
          easing: 'inAndOut'
        },
      }
    };

    this.getReleves();
  }

  getReleves(): void {
    this.cursor('wait');
    this.utilisateurService.getUserReleves(this.id).subscribe((releves) => {
      this.cursor('initial');
      releves.complexesReleves.forEach(complexeReleve => {
        const idType: number = complexeReleve.releve.TypeReleve.id;
        const releve: Releve = complexeReleve.releve;
        if (!this.typeReleves.some(e => e.id === idType)) {
          if (this.idTypeSelected === '-1') {
            this.idTypeSelected = '' + idType;
          }
          this.typeReleves.push(releve.TypeReleve);
          this.chartValues[idType] = {
            data: [],
            columns: [
              'Date',
              'Valeur'
            ],
            colors: ['blue'],
            series: {
              0: {
                lineWidth: 3
              }
            }
          };
        }
        const splitedDate = releve.prise_de_mesure.split('-');
        const date = splitedDate[1] + '/' + splitedDate[2].substr(0, 2) + '/' + splitedDate[0];
        this.chartValues[idType].data.push([new Date(date), releve.valeur]);
      });
      this.idTypeSelected = this.analyseForm.value.TypeReleveId;
      this.applyChartValues();
      this.typeReleves.forEach(typeReleve => {
        this.analyseService.getAnalyseByReleveType(typeReleve.id).subscribe((analyses) => {
          let count = 1;
          for (const i in analyses) {
            const analyse = analyses[i];
            this.chartValues[typeReleve.id].columns.push(analyse.Dangerosite.message);
            this.chartValues[typeReleve.id].colors.push(analyse.Dangerosite.Couleur.label);
            this.chartValues[typeReleve.id].series[count++] = { lineWidth: 1 };
            if (analyse.Dangerosite.Couleur.id !== RED_COLOR_ID) {
              this.chartValues[typeReleve.id].columns.push(analyse.Dangerosite.message);
              this.chartValues[typeReleve.id].colors.push(analyse.Dangerosite.Couleur.label);
              this.chartValues[typeReleve.id].series[count++] = { lineWidth: 1 };
            }
            this.chartValues[typeReleve.id].data.forEach(d => {
              if (analyse.Dangerosite.Couleur.id === RED_COLOR_ID) {
                if (analyse.mini === 0) {
                  d.push(analyse.maxi);
                } else {
                  d.push(analyse.mini);
                }
              } else {
                d.push(analyse.mini);
                d.push(analyse.maxi);
              }
            });
          }
        });
      });
    });
  }

  changeType(): void {
    this.idTypeSelected = this.analyseForm.value.TypeReleveId;
    this.applyChartValues();
  }

  applyChartValues(): void {
    this.chart.data = this.chartValues[this.idTypeSelected].data;
    this.chart.columns = this.chartValues[this.idTypeSelected].columns;
    this.chart.options.colors = this.chartValues[this.idTypeSelected].colors;
    this.chart.options.series = this.chartValues[this.idTypeSelected].series;
  }

  cursor(cursorType: string): void {
    document.getElementsByTagName('body')[0].style.cursor = cursorType;
  }
}
