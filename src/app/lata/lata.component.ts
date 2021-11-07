import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lata',
  templateUrl: './lata.component.html',
  styleUrls: ['./lata.component.css']
})
export class LataComponent implements OnInit {

  constructor() { }
  @Input() lata_dla_gazety: Array<any> | undefined;
  @Input() currRok: string | undefined;
  @Output() dajRok = new EventEmitter();
  emitEvent(dot: string) {
    this.dajRok.emit(dot)
  }
  ngOnInit(): void {
    // console.log(this.lata_dla_gazety)
  }

}
