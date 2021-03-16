import faker from 'faker';

// Import the mappable interface 
import { Mappable } from './CustomMap';

//  We are explicityly saying Company class implements Mappable interface so that TypeScript can point to any errors at the right place
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<div><h1>company name: ${this.companyName}</h1><h3>${this.catchPhrase}</div>`;
  }
}
