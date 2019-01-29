import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return element(by.deepCss('ion-title')).getText();
  }

  getButton(text: string) {
    return element(by.cssContainingText('.button', text));
  }
}
