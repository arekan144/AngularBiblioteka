import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-lata',
  templateUrl: './lata.component.html',
  styleUrls: ['./lata.component.css']
})
export class LataComponent implements OnInit {

  constructor() { }
  @Input() lataGazety: Array<any> | undefined;
  @Input() currRok: string | undefined;
  @Input()
  dajRok!: Function;

  ngOnInit(): void {
    // let rok = this.route.snapshot.paramMap.get("rok")
    // console.log(rok)
  }

}
