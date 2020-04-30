import { Injectable } from '@angular/core';
import {IGearSet} from '../Interfaces/GearSet';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IGearItem} from '../Interfaces/GearItem';

@Injectable({
  providedIn: 'root'
})
export class GearSetService {

  activeSet: IGearSet = new class implements IGearSet {
    SetName: string;
    Ammo: IGearItem;
    Back: IGearItem;
    Body: IGearItem;
    Feet: IGearItem;
    Hands: IGearItem;
    Head: IGearItem;
    LeftEar: IGearItem;
    LeftRing: IGearItem;
    Legs: IGearItem;
    Main: IGearItem;
    Neck: IGearItem;
    RightEar: IGearItem;
    RightRing: IGearItem;
    Sub: IGearItem;
    Waist: IGearItem;
  };

  constructor(private http: HttpClient) { }

  updateSet(set) {
    this.activeSet = set;
    console.log(this.activeSet);
  }

  get getActiveSet() {
    return this.activeSet;
  }

  postGearSet(set: IGearSet) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post('/swap', set, httpOptions);
  }
}