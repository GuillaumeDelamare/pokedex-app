import { Type } from '../interfaces/PokemonResponse';
import { PokemonTypesPipe } from './pokemon-types.pipe';

describe('PokemonTypesPipe', () => {
  const pipe = new PokemonTypesPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform no type', () => {
    // ARRANGE
    let type: Type[] = [];

    // ACT
    let result = pipe.transform(type, '-');

    // ASSERT
    expect(result).toBe('');
  });

  it('should transform one type', () => {
    // ARRANGE
    let type: Type[] = [
      {
        slot: 1,
        type: {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      },
    ];

    // ACT
    let result = pipe.transform(type, '; ');

    // ASSERT
    expect(result).toBe('fire');
  });

  it('should transform more type', () => {
    // ARRANGE
    let type: Type[] = [
      {
        slot: 1,
        type: {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'fairy',
          url: 'https://pokeapi.co/api/v2/type/18/',
        },
      },
    ];

    // ACT
    let result = pipe.transform(type, ', ');

    // ASSERT
    expect(result).toBe('water, fairy');
  });
});
