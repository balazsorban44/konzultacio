import { KonzultPage } from './app.po';

describe('konzult App', () => {
  let page: KonzultPage;

  beforeEach(() => {
    page = new KonzultPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
