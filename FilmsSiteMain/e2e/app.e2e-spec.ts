import { FilmsSiteMainPage } from './app.po';

describe('films-site-main App', () => {
  let page: FilmsSiteMainPage;

  beforeEach(() => {
    page = new FilmsSiteMainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
