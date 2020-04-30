import { Component, OnInit } from '@angular/core';
import {SwapService} from '../../services/swap.service';
import {GearSetService} from '../../services/gear-set.service';
import {IGearSet} from '../../Interfaces/GearSet';
import {IGearItem} from '../../Interfaces/GearItem';

@Component({
  selector: 'app-gearset',
  templateUrl: './gearset.component.html',
  styleUrls: ['./gearset.component.scss']
})
export class GearsetComponent implements OnInit {
  slot: string
  gearSet: IGearSet = new class implements IGearSet {
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
  private displayGearSelection: boolean;
  private setSaved = false;
  itemId: number;

  constructor(private swapService: SwapService, private gearSetService: GearSetService) { }

  ngOnInit() { }

  updateSet($event) {
    this.gearSet[$event.slot] = $event.itemName;
    this.displayGearSelection = false;
    this.setSaved = false;
  }

  selectGearItem(slot: string) {
    this.slot = slot;
    this.displayGearSelection = true;
  }

  saveFullSet() {
    this.gearSetService.updateSet(this.gearSet);
    this.setSaved = true;
  }

  editSet() {
    this.setSaved = false;
  }

  setCheck() {
    console.log(this.gearSetService.getActiveSet);
  }
}