import {
  Component
} from '@angular/core';
import {
  Car
} from 'src/app/interfaces/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements Car {
  name: string = "Lada kalina";
  mileage: number = 75;
  tank: number = 40;
  fuel: number = 20;
  specifications: String[] = ["maxspeed: 100", "injector: automatic"];

  constructor() {}
  drive(): void {
    this.mileage++;
    this.fuel--;
  }
  refuel(): void {
    this.fuel += 4;
  }

  public onClickDriveHandler(): void {
    this.drive();
  }

  public onClickRefuelHandler(): void {
    this.refuel();


  }
}
