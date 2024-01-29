import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  allfruits:Fruit[]=[];
  constructor(private fruitService:FruitService){}

  ngOnInit(): void {
    this.fruitService.getAll().subscribe((data)=>{
      this.allfruits=data;
    })
  }


  deleteItem(id:number){
    this.fruitService.delete(id).subscribe({
      next:(data)=>{
        this.allfruits=this.allfruits.filter(_=>_.id!=id)
      },
    })
  }

}
