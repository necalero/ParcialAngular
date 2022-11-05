/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PlantListComponent } from './plant-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantListComponent ],
      providers: [PlantService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const plant = new Plant(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.lorem.word(),
        "Exterior",
        5,
        faker.lorem.word(),
        faker.lorem.word()
      );
      component.plants.push(plant);
    }


    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 <tr.table-dark.header-row> elements', () => {
    expect(debug.queryAll(By.css('tr.table-dark.header-row'))).toHaveSize(1)
  });

  it('should have 3 <tr.plant-row> elements', () => {
    expect(debug.queryAll(By.css('tr.plant-row'))).toHaveSize(3)
  });



});
