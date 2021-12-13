import { Component, Input, OnInit } from '@angular/core';


import { FormControl } from '@angular/forms';
import { DataService } from '../php-dec.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [DataService]
})

export class EditComponent implements OnInit {
  lata = new FormControl()
  constructor(private readonly _DataService: DataService) {
    for (let x = 1960; x < 2011; x++) {
      this.lataList[x - 1960] = x.toString();
    }
  }
  lataList: string[] = [];
  // @Input()
  nazw = '';
  // @Input()
  mini = '';
  state = 'dodaj';
  ngOnInit(): void {

  }
  chngInto(el: string): void {
    this.state = el;
    // console.log(this.state)
  }
  add(): void {
    let a;
    if (this.nazw != '' && this.mini != '' && this.lata.value != null)
      a = this._DataService.add('http://localhost/m/add.php', { nazw: this.nazw, mini: this.mini, lata: JSON.stringify(this.lata.value) })
    console.log(this.nazw, this.mini, this.lata.value, a)
  }

}
