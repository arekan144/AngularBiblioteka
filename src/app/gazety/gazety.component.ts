import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-gazety',
  templateUrl: './gazety.component.html',
  styleUrls: ['./gazety.component.css'],

})
export class GazetyComponent implements OnInit {

  @Input() dostepneGazety: Array<any> | undefined;
  // @Input()
  // number!: number;
  @Output() dajGazete = new EventEmitter();
  // @ViewChildren('myname') input: any;
  emitEvent = (ev: MouseEvent, dot: string): void => {
    console.log(ev.target)
    // this.dajGazete.emit(dot)
  }

  ngOnInit(): void {
    // this.ch2p.emit("")
  }


}
