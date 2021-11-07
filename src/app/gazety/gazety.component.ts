import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-gazety',
  templateUrl: './gazety.component.html',
  styleUrls: ['./gazety.component.css'],

})
export class GazetyComponent implements OnInit {

  @Input() dostepneGazety: Array<any> | undefined;
  @Output() dajGazete = new EventEmitter();

  emitEvent = (dot: string) => {
    this.dajGazete.emit(dot)
  }

  ngOnInit(): void {
    // this.ch2p.emit("")
  }

}
