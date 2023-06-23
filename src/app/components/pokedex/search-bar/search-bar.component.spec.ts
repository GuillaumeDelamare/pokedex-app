import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { PokedexService } from '../../../services/pokedex.service';
import { FormsModule, NgForm } from '@angular/forms';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  const mockPokedexService = {
      getPokemonInfos: jest.fn()
    };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports:[FormsModule],
      providers: [{
        provide: PokedexService, useValue: mockPokedexService
      }]
    });
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('should call getPokemonInfos from PokedexService', ()=>{
      // ARRANGE


      // ACT
      component.ngOnInit();

      // ASSERT
      expect(mockPokedexService.getPokemonInfos).toHaveBeenCalled();
    });
  });

  describe('onSubmit()', () => {
    it('should call getPokemonInfos from PokedexService', () => {
      // ARRANGE
      const form = <NgForm>{
        value: {
          pokemonname: 'test',
        },
      };

      // ACT
      component.onSubmit(form);

      // ASSERT
      expect(mockPokedexService.getPokemonInfos).toHaveBeenCalledWith('test');
    });
  });
});
