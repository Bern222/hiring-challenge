import { BenSamplePage } from './app.po';

describe('ben-sample App', function() {
  let page: BenSamplePage;

  beforeEach(() => {
    page = new BenSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
