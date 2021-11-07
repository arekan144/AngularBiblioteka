import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-czasopismo',
  templateUrl: './czasopismo.component.html',
  styleUrls: ['./czasopismo.component.css']
})
export class CzasopismoComponent implements OnInit {
  @Input() dostepneCzasopisma: Array<any> | undefined;
  JSON = JSON;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.dostepneCzasopisma)
  }

}
