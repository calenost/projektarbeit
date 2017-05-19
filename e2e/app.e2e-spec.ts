import { Porjektarbeitv0.2Page } from './app.po';

describe('porjektarbeitv0.2 App', () => {
  let page: Porjektarbeitv0.2Page;

  beforeEach(() => {
    page = new Porjektarbeitv0.2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
