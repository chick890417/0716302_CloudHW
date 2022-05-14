import { Potter } from './potter';

describe('Potter', () => {
  let potter: Potter;
  beforeEach(() => {
    potter = new Potter();
  });
  it('buy 0 book', () => {
    const pay=potter.price(0);
    expect(pay).toBe(0);
  });
  it('buy 1 book', () => {
    const pay=potter.price(1);
    expect(pay).toBe(8);
  });
});
