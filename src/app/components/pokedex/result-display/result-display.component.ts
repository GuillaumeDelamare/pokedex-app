import { Component, OnInit } from '@angular/core';
import { PokemonResponse } from '../../..//interfaces/PokemonResponse';
import { PokedexService } from '../../../services/pokedex.service';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {
  currentPokemon: PokemonResponse | undefined;

  constructor(private pokedexService: PokedexService) { }
  ngOnInit(): void {
  }

  onNextPokemon() {
  }

  onPreviousPokemon() {
  }

}
