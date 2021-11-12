import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { DostCzasopismaService } from '../dost-czasopisma.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gazety',
  templateUrl: './gazety.component.html',
  styleUrls: ['./gazety.component.css'],

})
export class GazetyComponent implements OnInit {
  public dostepneGazety: Array<any> | undefined;
  // @Input()
  // number!: number;
  // @Output() dajGazete = new EventEmitter();
  // @ViewChildren('myname') input: any;
  emitEvent = (ev: MouseEvent, dot: string): void => {
    console.log(ev.target)
    this.router.navigate([dot]);
    // this.dajGazete.emit(dot)
  }
  // public czasopismaService: DostCzasopismaService = new DostCzasopismaService;
  constructor(private czasopismaService: DostCzasopismaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe((data) => {
    //   // console.log(data['nazwy']);
    //   let do_obrobki = data['nazwy']
    //   let paryGazet = [];
    //   while (do_obrobki.length != 0) { paryGazet.push(do_obrobki.splice(0, 2)) }
    //   console.log(paryGazet, "???")
    //   this.dostepneGazety = paryGazet

    // });
    let do_obrobki = this.czasopismaService.getNazwy();
    console.log(do_obrobki)
    let paryGazet = [];
    while (do_obrobki.length != 0) { paryGazet.push(do_obrobki.splice(0, 2)) }

    this.dostepneGazety = [...paryGazet]

    // this.dostepneGazety = this.czasopismaService.getNazwy();
    // console.log(this.czasopismaService.getNazwy())
    // this.ch2p.emit("")
  }


}
