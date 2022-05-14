import { Potter } from './potter';

describe('Potter', () => {
  it('buy 0 book', () => {
    const potter = new Potter();
    const pay=potter.price(0);
    expect(pay).toBe(0);
  });
  it('buy 1 book', () => {
    const potter = new Potter();
    const pay=potter.price(1);
    expect(pay).toBe(8);
  });
});
