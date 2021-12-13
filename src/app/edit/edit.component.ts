import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],

})

export class EditComponent implements OnInit {

  constructor() { }
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  ngOnInit(): void {
    
    console.log(this.toppings.value);
  }


}
