"use server";

import { getAllCars } from "@/services/car";

export const getCars = async () => {
  return await getAllCars();
}