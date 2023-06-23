import { pipe } from 'rxjs';
import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  const pipe = new CapitalizePipe();

  it('create an instance', () => {

    expect(pipe).toBeTruthy();
  });

  it('should capitalize lower case word', () => {
    // ARRANGE

    // ACT
    let result = pipe.transform('toto');

    // ASSERT
    expect(result).toBe('Toto')
  })

  it('should capitalize upper case word', () => {
    // ARRANGE

    // ACT
    let result = pipe.transform('TITI');

    // ASSERT
    expect(result).toBe('Titi');
  });
});
