import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private httpClient:HttpClient ) { }
    getAll(){
      return this.httpClient.get<Fruit[]>('http://localhost:3000/fruits')
    }

    creat(data:Fruit){
      return this.httpClient.post('http://localhost:3000/fruits',data)
    }

    edit(id:number){
      return this.httpClient.get<Fruit>(`http://localhost:3000/fruits/${id}`)
    }

    update(data:Fruit){
      return this.httpClient.put<Fruit>(`http://localhost:3000/fruits/${data.id}`,data)
    }

    delete(id:number){
      return this.httpClient.delete<Fruit>(`http://localhost:3000/fruits/${id}`)
    }
    
  
}
