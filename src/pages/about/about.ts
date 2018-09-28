import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items;

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      {'name':'Pokémon Yellow','detail':'hijau'},
      {'name':'Super Metroid','detail':'kuning 1'},
      {'name':'Mega Man X','detail':'kuning 2'}
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.detail.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


}
