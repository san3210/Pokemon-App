import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInformationComponent } from './pokemon-information.component';

describe('PokemonInformationComponent', () => {
  let component: PokemonInformationComponent;
  let fixture: ComponentFixture<PokemonInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
