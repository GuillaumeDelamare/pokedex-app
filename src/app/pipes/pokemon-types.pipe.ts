import { Pipe, PipeTransform } from '@angular/core';
import { Type } from '../interfaces/PokemonResponse';

@Pipe({
  name: 'pokemonTypes'
})
export class PokemonTypesPipe implements PipeTransform {
  transform(value: Type[], arg: string): string {
    return ''
  }

}
