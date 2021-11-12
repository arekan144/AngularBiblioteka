import { Component, OnInit, Input, Injectable, } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { DostCzasopismaService } from '../dost-czasopisma.service';
@Component({
  selector: 'app-czasopismo',
  templateUrl: './czasopismo.component.html',
  styleUrls: ['./czasopismo.component.css'],
  providers: [DostCzasopismaService]

})
export class CzasopismoComponent implements OnInit {
  public dostepneCzasopisma: Array<any> | undefined;
  public rootGazeta: string | undefined;
  // JSON = JSON;

  constructor(private czasopismaService: DostCzasopismaService,
    private route: ActivatedRoute, private router: Router) {

    this.route.paramMap.subscribe(params => {
      // console.log("lol", params)
      let rok = params.get("rok")
      let gazeta = this.route.parent?.snapshot.paramMap.get('gazeta')!;
      if (gazeta && this.czasopismaService.getLataFromGazeta(gazeta).indexOf(rok) == -1 && rok != 'all')
        this.router.navigate([`${gazeta}`])
      let czor = this.czasopismaService.getCzaspoismoFromGazeta(gazeta, rok);
      this.rootGazeta = gazeta;
      // console.log(czor)
      this.dostepneCzasopisma = (typeof czor == 'object') ? czor : undefined;
      // console.log(rok, gazeta, this.czasopismaService.getLataFromGazeta(gazeta))
    })

  }
  ngOnInit(): void {

  }

}
