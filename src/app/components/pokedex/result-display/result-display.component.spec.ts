import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDisplayComponent } from './result-display.component';
import { PokedexService } from '../../../services/pokedex.service';

describe('ResultDisplayComponent', () => {
  let component: ResultDisplayComponent;
  let fixture: ComponentFixture<ResultDisplayComponent>;

  const RESPONSE = {
        abilities: [],
        base_experience: 0,
        forms: [],
        game_indices: [],
        height: 0,
        held_items: [],
        id: 0,
        is_default: false,
        location_area_encounters: '',
        moves: [],
        name: '',
        order: 0,
        past_types: [],
        species: {
          name: '',
          url: '',
        },
        sprites: {
          back_default: '',
          back_shiny: '',
          front_default: '',
          front_shiny: '',
          other: {
            dream_world: {
              front_default: '',
            },
            home: {
              front_default: '',
              front_shiny: '',
            },
            official_artwork: {
              front_default: '',
              front_shiny: '',
            },
          },
          versions: {
            generation_i: {
              red_blue: {
                back_default: '',
                back_gray: '',
                back_transparent: '',
                front_default: '',
                front_gray: '',
                front_transparent: '',
              },
              yellow: {
                back_default: '',
                back_gray: '',
                back_transparent: '',
                front_default: '',
                front_gray: '',
                front_transparent: '',
              },
            },
            generation_ii: {
              crystal: {
                back_default: '',
                back_shiny: '',
                back_shiny_transparent: '',
                back_transparent: '',
                front_default: '',
                front_shiny: '',
                front_shiny_transparent: '',
                front_transparent: '',
              },
              gold: {
                back_default: '',
                back_shiny: '',
                front_default: '',
                front_shiny: '',
                front_transparent: '',
              },
              silver: {
                back_default: '',
                back_shiny: '',
                front_default: '',
                front_shiny: '',
                front_transparent: '',
              },
            },
            generation_iii: {
              emerald: {
                front_default: '',
                front_shiny: '',
              },
              firered_leafgreen: {
                back_default: '',
                back_shiny: '',
                front_default: '',
                front_shiny: '',
              },
              ruby_sapphire: {
                back_default: '',
                back_shiny: '',
                front_default: '',
                front_shiny: '',
              },
            },
            generation_iv: {
              diamond_pearl: {
                back_default: '',
                back_shiny: '',
                front_default: '',
                front_shiny: '',
              },
              heartgold_soulsilver: {
                back_default: '',
                back_shiny: '',
                front_default: '',
                front_shiny: '',
              },
              platinum: {
                back_default: '',
                back_shiny: '',
                front_default: '',
                front_shiny: '',
              },
            },
            generation_v: {
              black_white: {
                animated: {
                  back_default: '',
                  back_shiny: '',
                  front_default: '',
                  front_shiny: '',
                },
                back_default: '',
                back_shiny: '',
                front_default: '',
                front_shiny: '',
              },
            },
            generation_vi: {
              omegaruby_alphasapphire: {
                front_default: '',
                front_shiny: '',
              },
              x_y: {
                front_default: '',
                front_shiny: '',
              },
            },
            generation_vii: {
              icons: {
                front_default: '',
              },
              ultra_sun_ultra_moon: {
                front_default: '',
                front_shiny: '',
              },
            },
            generation_viii: {
              icons: {
                front_default: '',
              },
            },
          },
        },
        stats: [],
        types: [],
        weight: 0,
      };

  const mockPokedexService = {
    getPokemonInfos: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultDisplayComponent],
      providers: [
        {
          provide: PokedexService,
          useValue: mockPokedexService,
        },
      ],
    });
    fixture = TestBed.createComponent(ResultDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onNextPokemon()', () => {
    it('should search the next pokemon', () => {
      // ARRANGE
      RESPONSE.id = 52
      component.currentPokemon = RESPONSE;

        // ACT
        component.onNextPokemon();

      // ASSERT
      expect(mockPokedexService.getPokemonInfos).toHaveBeenCalledWith(53);
    });
  });

    describe('onPreviousPokemon()', () => {
      it('should search the next pokemon', () => {
        // ARRANGE
        RESPONSE.id = 36;
        component.currentPokemon = RESPONSE;

        // ACT
        component.onPreviousPokemon();

        // ASSERT
        expect(mockPokedexService.getPokemonInfos).toHaveBeenCalledWith(35);
      });
    });
});
