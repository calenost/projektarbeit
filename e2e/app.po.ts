import { browser, element, by } from 'protractor';

export class Porjektarbeitv0.2;Page; {
  navigateTo(); {
    return browser.get('/');
  }

  getParagraphText(); {
    return element(by.css('app-root h1')).getText();
  }
}
