import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DostCzasopismaService } from '../dost-czasopisma.service';

@Component({
  selector: 'app-lista-czasopism',
  templateUrl: './lista-czasopism.component.html',
  styleUrls: ['./lista-czasopism.component.css'],
  providers: [DostCzasopismaService]
})
export class ListaCzasopismComponent implements OnInit {
  public lata!: Array<any>;
  public currRok: string = '';
  constructor(private czasopismaService: DostCzasopismaService,
    private route: ActivatedRoute, private router: Router) { }

  zmnRoku = (dot: string) => {
    if (this.currRok == dot)
      this.currRok = ''
    else this.currRok = dot;


    console.log(dot)
  }

  ngOnInit(): void {
    let gazeta = this.route.snapshot.paramMap.get("gazeta")
    // let rok = this.route.snapshot.paramMap.get("rok")
    if (!this.czasopismaService.checkGazeta(gazeta!))
      this.router.navigateByUrl('/')
    else {
      this.lata = this.czasopismaService.getLataFromGazeta(gazeta!)
      // let czasopisma = this.czasopismaService.getCzaspoismoFromGazeta(gazeta!, rok)
      // console.log(czasopisma)
    }
  }

}
