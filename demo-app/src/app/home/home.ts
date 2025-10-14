import { Component, computed, signal, inject } from '@angular/core';
import { HousingService } from '../housing-location/housing.service';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housing-location/housing-location-info';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private readonly housingService = inject(HousingService);

  readonly filterTerm = signal<string>('');
  readonly filteredHousingLocations = computed<HousingLocationInfo[]>(() =>
    this.housingService.filterByCity(this.filterTerm())
  );

  onFilterChange(value: string) {
    this.filterTerm.set(value);
  }
}
