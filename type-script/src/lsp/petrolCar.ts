import { Vehicle } from './vehicle';

export class PetrolCar extends Vehicle {
    private static readonly FUEL_TANK_FULL = 100;
    private _fuelTankLevel: number = 0;

    fillUpWithFuel(): void {
        this._fuelTankLevel = PetrolCar.FUEL_TANK_FULL;
    }

    chargeBattery(): void {
        throw new Error("A petrol car cannot be recharged");
    }

    fuelTankLevel(): number {
        return this._fuelTankLevel;
    }
}
