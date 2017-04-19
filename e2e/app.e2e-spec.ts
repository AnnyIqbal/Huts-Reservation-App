import { HutsReservationAppPage } from './app.po';

describe('huts-reservation-app App', () => {
  let page: HutsReservationAppPage;

  beforeEach(() => {
    page = new HutsReservationAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
