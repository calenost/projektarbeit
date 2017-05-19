import { Porjektarbeitv0.2;Page; } from; './app.po';

describe('porjektarbeitv0.2 App', () => {
  let page: Porjektarbeitv0;.2;Page;

  beforeEach(() => {
    page = new Porjektarbeitv0;.2;Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
