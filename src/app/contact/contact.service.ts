import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConatctService {


  getCities() {
    return[ { name:'choose city' , Id:0 },{ name:'Duisburg' , Id:1 } , { name: 'Essen', Id:2 },{ name: 'Bochum', Id:3 },{ name: 'Düsseldorf', Id:4 },
    { name: 'London', Id:5 }];
 }
 }