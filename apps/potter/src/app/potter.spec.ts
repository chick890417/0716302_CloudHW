import { Potter } from './potter';

describe('Potter', () => {
  let potter: Potter;
  beforeEach(() => {
    potter = new Potter();
  });
  it('buy 0 book', () => {
    const pay=potter.price([]);
    expect(pay).toBe(0);
  });
  it('buy 1 book', () => {
    let books=[0];
    const pay=potter.price(books);
    expect(pay).toBe(8);
  });
  it('buy 2 diff book', () => {
    let books=[0,1];
    const pay=potter.price(books);
    expect(pay).toBe(8*2*0.95);
  });
});