import { TarjetasFrontPage } from './app.po';

describe('tarjetas-front App', () => {
  let page: TarjetasFrontPage;

  beforeEach(() => {
    page = new TarjetasFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
