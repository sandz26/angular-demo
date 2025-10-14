import { Component, Input } from '@angular/core';
import { HousingLocationInfo } from './housing-location-info';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css'
})
export class HousingLocation {
  @Input({ required: true }) housingLocation!: HousingLocationInfo;
}
