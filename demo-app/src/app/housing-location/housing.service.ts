import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housing-location-info';

@Injectable({ providedIn: 'root' })
export class HousingService {
  private readonly housingLocationsInternal: HousingLocationInfo[] = [
    {
      id: 1,
      name: 'Sunset Villas',
      city: 'San Diego',
      state: 'CA',
      photo: '',
      availableUnits: 3,
      wifi: true,
      laundry: true,
    },
    {
      id: 2,
      name: 'Maple Heights',
      city: 'Austin',
      state: 'TX',
      photo: 'https://placehold.co/600x400?text=Maple+Heights',
      availableUnits: 0,
      wifi: true,
      laundry: false,
    },
    {
      id: 3,
      name: 'Lakeview Lodge',
      city: 'Madison',
      state: 'WI',
      photo: 'https://placehold.co/600x400?text=Lakeview+Lodge',
      availableUnits: 5,
      wifi: false,
      laundry: true,
    },
    {
      id: 4,
      name: 'Pine Ridge Apartments',
      city: 'Portland',
      state: 'OR',
      photo: 'https://placehold.co/600x400?text=Pine+Ridge',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 5,
      name: 'Cedar Grove Homes',
      city: 'Denver',
      state: 'CO',
      photo: 'https://placehold.co/600x400?text=Cedar+Grove',
      availableUnits: 1,
      wifi: true,
      laundry: true,
    },
  ];

  getAllHousingLocations(): HousingLocationInfo[] {
    return this.housingLocationsInternal;
  }

  getHousingLocationById(id: number): HousingLocationInfo | undefined {
    return this.housingLocationsInternal.find((x) => x.id === id);
  }

  filterByCity(term: string): HousingLocationInfo[] {
    const normalized = term.trim().toLowerCase();
    if (!normalized) return this.getAllHousingLocations();
    return this.housingLocationsInternal.filter((loc) =>
      `${loc.city}, ${loc.state}`.toLowerCase().includes(normalized) ||
      loc.city.toLowerCase().includes(normalized) ||
      loc.state.toLowerCase().includes(normalized)
    );
  }
}
