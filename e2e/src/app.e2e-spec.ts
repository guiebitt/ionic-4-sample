import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('title should contain "Welcome" when language is English', () => {

    page.navigateTo();

    page.getButton('English').click();
    expect(page.getTitle()).toContain('Welcome');
  });

  it('title should contain "¡Bienvenido" when language is Spanish', () => {

    page.navigateTo();

    page.getButton('Español').click();
    expect(page.getTitle()).toContain('¡Bienvenido');
  });

  it('title should contain "Bem vindo" when language is Portuguese Brazil', () => {

    page.navigateTo();

    page.getButton('Português').click();
    expect(page.getTitle()).toContain('Bem vindo');
  });
});
