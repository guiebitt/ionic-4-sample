import { Events } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username = 'Guilherme Eduardo Bittencourt';

  constructor(private events: Events) { }

  changePtLang() {
    this.events.publish('CHANGE_LANG', 'pt-br');
  }

  changeEnLang() {
    this.events.publish('CHANGE_LANG', 'en');
  }

  changeEsLang() {
    this.events.publish('CHANGE_LANG', 'es');
  }
}
