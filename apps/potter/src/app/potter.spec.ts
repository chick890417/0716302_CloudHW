import { Potter } from './potter';

describe('Potter', () => {
  let potter: Potter;
  beforeEach(() => {
    potter = new Potter();
  });
  it('should create an instance', () => {
    expect(potter).toBeTruthy();
  });
  it('buy 0 book', () => {
    expect(potter.price([])).toBe(0);
  });
  it('buy 1 book', () => {
    let books=[0];
    expect(potter.price(books)).toBe(8);
  });
  it('buy 2 diff book', () => {
    let books=[0,1];
    expect(potter.price(books)).toBe(8*2*0.95);
  });
  it('buy 3 diff book', () => {
    let books=[0,1,2];
    expect(potter.price(books)).toBe(8*3*0.9);
  });
  it('buy 4 diff book', () => {
    let books=[0,1,2,3];
    expect(potter.price(books)).toBe(8*4*0.8);
  });
  it('buy 5 diff book', () => {
    let books=[0,1,2,3,4];
    expect(potter.price(books)).toBe(8*5*0.75);
  });
  it('buy 3 same book', () => {
    let books=[1,1,1];
    expect(potter.price(books)).toBe(8*3);
  });
});