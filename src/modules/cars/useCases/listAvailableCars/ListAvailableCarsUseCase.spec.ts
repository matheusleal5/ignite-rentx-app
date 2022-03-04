import { CarsRepositoryInMemory } from "@modules/cars/repositories/inMemory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCars: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCars = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      description: "Car 1 Description",
      daily_rate: 100,
      license_plate: "AAA-1111",
      fine_amount: 50,
      brand: "Brand 1",
      category_id: "car_1_id",
    });

    const cars = await listAvailableCars.execute({});
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 2",
      description: "Car 2 Description",
      daily_rate: 150,
      license_plate: "BBB-2222",
      fine_amount: 100,
      brand: "Brand 2",
      category_id: "car_2_id",
    });

    const cars = await listAvailableCars.execute({
      brand: "Brand 2",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 3",
      description: "Car 3 Description",
      daily_rate: 200,
      license_plate: "CCC-3333",
      fine_amount: 150,
      brand: "Brand 3",
      category_id: "car_3_id",
    });

    const cars = await listAvailableCars.execute({
      name: "Car 3",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 4",
      description: "Car 4 Description",
      daily_rate: 250,
      license_plate: "DDD-4444",
      fine_amount: 200,
      brand: "Brand 4",
      category_id: "car_4_id",
    });

    const cars = await listAvailableCars.execute({
      category_id: "car_4_id",
    });

    expect(cars).toEqual([car]);
  });
});
