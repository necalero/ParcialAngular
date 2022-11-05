import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantStatsComponent } from './plant-stats/plant-stats.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PlantListComponent, PlantStatsComponent],
  declarations: [PlantListComponent, PlantStatsComponent]
})
export class PlantModule { }
