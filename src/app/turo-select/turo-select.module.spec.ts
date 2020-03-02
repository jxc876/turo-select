import { TuroSelectModule } from './turo-select.module';

describe('TuroSelectModule', () => {
  let turoSelectModule: TuroSelectModule;

  beforeEach(() => {
    turoSelectModule = new TuroSelectModule();
  });

  it('should create an instance', () => {
    expect(turoSelectModule).toBeTruthy();
  });
});
