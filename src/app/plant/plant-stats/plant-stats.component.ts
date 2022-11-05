import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plant-stats',
  templateUrl: './plant-stats.component.html',
  styleUrls: ['./plant-stats.component.css']
})
export class PlantStatsComponent implements OnInit {

  plants: Array<Plant> = [];
  types: Array<number> = [];

  constructor(private plantService: PlantService) { }

  getPlants(): void {
    this.plantService.getPlants().subscribe((plants) => {
      this.plants = plants;
      this.calculateTypes();
    });

  }

  calculateTypes(): void {
    let nInterior: number = 0;
    let nExterior: number = 0;
    for(let i = 0; i<this.plants.length; i++){
      if(this.plants[i].tipo == "Interior"){
        nInterior++;
      }
      else{
        nExterior++;
      }
    }
    this.types[0] = nInterior;
    this.types[1] = nExterior;
  }

  ngOnInit(): void {
    this.getPlants();

  }

}
