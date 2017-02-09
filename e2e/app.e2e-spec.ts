import { PetTagsNgrxPage } from './app.po';

describe('pet-tags-ngrx App', function() {
  let page: PetTagsNgrxPage;

  beforeEach(() => {
    page = new PetTagsNgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
