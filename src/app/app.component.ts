import { Component } from '@angular/core';
import * as xml2js from 'xml2js';
const wszystko = require('xml-loader!../assets/czasopisma.xml').czasopisma;

interface _gazeta {
  name: string,
  pic_src: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'biblioteka';
  private wszystko = wszystko.zmienne[0];
  public zmienne: Array<_gazeta> = [];
  public wybGaz: string = '';
  zapiszWybor(txt: string) {
    console.log(txt);
    this.wybGaz = txt;
  }
  constructor() {
    //wszystko.zmienne[0]
    // console.log(this.wszystko)
    let wszystkieGazety = this.wszystko;
    for (let gazeta in wszystkieGazety) {
      this.zmienne.push({ name: wszystkieGazety[gazeta][0].klik[0], pic_src: wszystkieGazety[gazeta][0].src[0] })
    }
    // console.log(this.zmienne)
  }
}
