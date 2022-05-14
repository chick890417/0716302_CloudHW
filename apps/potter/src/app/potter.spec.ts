import { Potter } from './potter';

describe('Potter', () => {
  it('buy 0 book', () => {
    const potter = new Potter();
    expect(potter.price).toBe(0);
  });
});
