  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable, of, EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
  import { Fruit } from './fruit';

  @Injectable({
    providedIn: 'root'
  })
  export class FruitService {

    constructor(private httpClient:HttpClient ) { }
      getAll(){
        return this.httpClient.get<Fruit[]>('http://localhost:3000/fruits')
      }

      getMaxId(): Observable<number> {
        return this.getAll().pipe(
          map(fruits => Math.max(...fruits.map(fruit => Number(fruit.id)))),
          catchError(error => {
            console.error(error);
            return of(0); // Return 0 if there is an error (e.g., no fruits in the list)
          })
        );
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

      delete(id:number):Observable<Fruit>{
        return this.httpClient.delete<Fruit>(`http://localhost:3000/fruits/${id}`)
      }
      
    
  }