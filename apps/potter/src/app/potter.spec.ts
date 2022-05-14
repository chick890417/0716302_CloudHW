import { Potter } from './potter';

describe('Potter', () => {
  it('buy 0 book', () => {
    const potter = new Potter();
    
    expect(potter.price).toBe(0);
  });
  it('buy 1 book', () => {
    const potter = new Potter();
    
    expect(potter.price).toBe(8);
  });
});
