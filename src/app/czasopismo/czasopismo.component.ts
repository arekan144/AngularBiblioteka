import { Component, OnInit, Input, Injectable, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { DostCzasopismaService } from '../dost-czasopisma.service';
@Component({
  selector: 'app-czasopismo',
  templateUrl: './czasopismo.component.html',
  styleUrls: ['./czasopismo.component.css'],
  providers: [DostCzasopismaService]

})
export class CzasopismoComponent implements OnInit {
  // @Input() dostepneCzasopisma: Array<any> | undefined;
  // @Input() rootGazeta: string | undefined;
  // JSON = JSON;
  ngOnInit(): void {
    console.log()
  }

}
