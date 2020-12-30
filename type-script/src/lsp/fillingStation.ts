import { Vehicle } from './vehicle';
import { PetrolCar } from './petrolCar';
import { ElectricCar } from './electricCar';

export class FillingStation {

    refuel(vehicle: Vehicle): void {
        if (vehicle instanceof PetrolCar) {
            vehicle.fillUpWithFuel();
        }
    }

    charge(vehicle: Vehicle): void {
        if (vehicle instanceof ElectricCar) {
            vehicle.chargeBattery();
        }
    }
}
