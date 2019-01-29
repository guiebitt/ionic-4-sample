import { Component } from '@angular/core';

import { Platform, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private events: Events
  ) {
    this.initializeApp();
    this.initializeTranslate();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private initializeTranslate() {

    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    if (browserLang.match('pt-*') || browserLang === 'pt') {
      this.translate.use('pt-br');
    } else if (browserLang.match('es-*') || browserLang === 'es') {
      this.translate.use('es');
    } else {
      this.translate.use('en');
    }

    // Language should be changed in module that it provides TranslateLoader
    this.events.subscribe('CHANGE_LANG', (lang) => {
      this.translate.use(lang);
    });
  }
}
