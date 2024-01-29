import { Component } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Router } from '@angular/router';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(private fruitService:FruitService,private router:Router){}
  formdata : Fruit={
    id:0,
    name:'',
    quantity:0,
    price:0
  }

  create(){
    this.fruitService.creat(this.formdata).subscribe({
      next:(data)=>{
        console.log(this.formdata.id)
        this.router.navigate(["fruit/home"])
      },
      error:(er)=>{
        console.log(er)
      }
    })
  }



}
