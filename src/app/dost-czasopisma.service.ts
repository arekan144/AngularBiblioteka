import { Injectable, OnInit, } from '@angular/core';
import * as xml2js from 'xml2js';
const wszystko = require('xml-loader!../assets/czasopisma.xml').czasopisma;
interface _gazeta {
  name: string,
  pic_src: string,
}
interface _objektus {
  [index: string]: Array<any>,
}

@Injectable({
  providedIn: 'root'
})
export class DostCzasopismaService {
  private nazwyGazet = wszystko.zmienne[0];
  private zmienne: Array<_gazeta> = [];

  getNazwy() {
    let wszystkieGazety = this.nazwyGazet;
    if (this.zmienne.length == 0)
      for (let gazeta in wszystkieGazety) {
        this.zmienne.push({ name: wszystkieGazety[gazeta][0].klik[0], pic_src: wszystkieGazety[gazeta][0].src[0] })
      }
    return this.zmienne;
  }
  checkGazeta(gazeta: string): boolean {
    if (this.nazwyGazet[gazeta])
      return true;
    return false;

  }
  public getLataFromGazeta(wybGaz: string): Array<any> {
    if (!wybGaz)
      return []
    return wszystko['lata'][0][wybGaz][0].split(',');
  }
  getCzaspoismoFromGazeta(wybGaz: string, wybRok: string | null): boolean | Array<any> {
    // console.log(this.daneGazety[this.wybGaz])
    let lataGazety: Array<any> = wszystko['lata'][0][wybGaz][0].split(',')
    if (!wybRok || (lataGazety.indexOf(wybRok) && wybRok != 'all'))
      return false;

    let daneGazety: _objektus = {}
    daneGazety[wybGaz] = [];
    let do_obrobki = wszystko[wybGaz][0];
    for (let element_do_obroki in do_obrobki) {
      let elemt = do_obrobki[element_do_obroki][0];
      if (elemt['$'].brak != undefined)
        daneGazety[wybGaz].push({ jest: false, rok: elemt['$'].rok, brak: elemt['$'].brak })
      else
        daneGazety[wybGaz].push({
          jest: true,
          rok: elemt['$'].rok,
          format: elemt.format[0],
          miniaturka: elemt.miniaturka[0],
          nazwa: elemt.nazwa[0],
          numer: elemt.numer[0],
          plik: elemt.plik[0],
          podeslal: elemt.podeslal[0],
          przetworzenie: elemt.przetworzenie[0],
          skan: elemt.skan[0],
          stron: elemt.stron[0],
          wydawca: elemt.wydawca[0]
        })


    }
    console.log(daneGazety)
    if (wybRok == 'all') return daneGazety[wybGaz];
    return daneGazety[wybGaz].filter(el => (el.rok == wybRok))
  }

  constructor() { }
  // init(): void {
  //   console.log(wszystko)
  //   let wszystkieGazety = this.nazwyGazet;
  //   for (let gazeta in wszystkieGazety) {
  //     this.zmienne.push({ name: wszystkieGazety[gazeta][0].klik[0], pic_src: wszystkieGazety[gazeta][0].src[0] })
  //     let do_obrobki = wszystko[gazeta][0]
  //     this.daneGazety[gazeta] = [];
  //     for (let element_do_obroki in do_obrobki) {
  //       let elemt = do_obrobki[element_do_obroki][0];
  //       // console.log(elemt, gazeta)
  //       if (elemt['$'].brak != undefined)
  //         this.daneGazety[gazeta].push({ jest: false, rok: elemt['$'].rok, brak: elemt['$'].brak })
  //       else
  //         this.daneGazety[gazeta].push({
  //           jest: true,
  //           rok: elemt['$'].rok,
  //           format: elemt.format[0],
  //           miniaturka: elemt.miniaturka[0],
  //           nazwa: elemt.nazwa[0],
  //           numer: elemt.numer[0],
  //           plik: elemt.plik[0],
  //           podeslal: elemt.podeslal[0],
  //           przetworzenie: elemt.przetworzenie[0],
  //           skan: elemt.skan[0],
  //           stron: elemt.stron[0],
  //           wydawca: elemt.wydawca[0]
  //         })
  //     }
  //     // console.log(wszystko['lata'])
  //     this.lataGazet[gazeta] = wszystko['lata'][0][gazeta][0].split(',')
  //     // console.log(do_obrobki)
  //   }
  // }
}
