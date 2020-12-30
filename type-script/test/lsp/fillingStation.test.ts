import { PetrolCar } from '../../src/lsp/petrolCar';
import { ElectricCar } from '../../src/lsp/electricCar';
import { FillingStation } from '../../src/lsp/fillingStation';

const FULL = 100;
const fillingStation = new FillingStation();

test('refuel a petrol car', () => {
    const car = new PetrolCar();

    fillingStation.refuel(car);

    expect(car.fuelTankLevel()).toBe(FULL);
});

test('not fail refueling an electric car', () => {
    const car = new ElectricCar();

    expect(() => fillingStation.refuel(car)).not.toThrow();
});

test('recharge an electric car', () => {
    const car = new ElectricCar();

    fillingStation.charge(car);

    expect(car.batteryLevel()).toBe(FULL);
});

test('not fail recharging a petrol car', () => {
    const car = new PetrolCar();

    expect(() => fillingStation.charge(car)).not.toThrow();
});
