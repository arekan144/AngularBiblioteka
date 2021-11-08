import { Component, OnInit, Input, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
@Component({
  selector: 'app-czasopismo',
  templateUrl: './czasopismo.component.html',
  styleUrls: ['./czasopismo.component.css']
})
export class CzasopismoComponent implements OnInit {
  @Input() dostepneCzasopisma: Array<any> | undefined;
  @Input() rootGazeta: string | undefined;
  JSON = JSON;

  constructor(public _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // console.log(this.dostepneCzasopisma)
  }

}
