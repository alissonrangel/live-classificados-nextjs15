import { prisma } from "@/utils/prisma"


type Props = {
  title: string;
  description?: string;
  author_name: string;
  author_email: string;
  negotiable?: string;
  price_from: string;
  price_to: string;
  imgName: string;
}

export const addCar = async (data: Props) => {
  const newCar = await prisma.car.create({
    data: {
      title: data.title,
      description: data.description,
      authorName: data.author_name,
      authorEmail: data.author_email,
      priceFrom: parseFloat(data.price_from),
      priceTo: parseFloat(data.price_to),
      negotiable: data.negotiable == 'on',
      img: data.imgName
    }
  });

  return newCar
}

export const getAllCars = async () => {
  const cars = await prisma.car.findMany({
    select: {
      id: true,
      title: true,
      img: true,
      priceFrom: true,
      priceTo: true
    }
  });
  return cars;
}