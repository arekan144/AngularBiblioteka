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
  private gazeta!: string;
  public currRok: string = '';
  constructor(private czasopismaService: DostCzasopismaService,
    private route: ActivatedRoute, private router: Router) { }

  zmnRoku = (dot: string) => {
    if (this.currRok == dot) {
      this.currRok = ''
      this.router.navigate([`${this.gazeta}/`, ''])
    }
    else {
      this.currRok = dot;
      this.router.navigate([`${this.gazeta}/`, dot])
    }
    // console.log(dot, location)
  }
  powrot(): void {
    this.router.navigateByUrl('/')
  }
  ngOnInit(): void {

    this.gazeta = this.route.snapshot.paramMap.get("gazeta")!
    let rok = this.route.firstChild?.snapshot.paramMap.get("rok")
    // console.log('??', rok, this.gazeta)
    rok ? this.currRok = rok : undefined;

    if (!this.czasopismaService.checkGazeta(this.gazeta!))
      this.router.navigateByUrl('/')
    else {
      this.lata = this.czasopismaService.getLataFromGazeta(this.gazeta!)
      // let czasopisma = this.czasopismaService.getCzaspoismoFromGazeta(gazeta!, rok)
      // console.log(czasopisma)
    }
  }

}
