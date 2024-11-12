"use server";

import { createCarSchema } from "@/schemas/create-car";
import { addCar } from "@/services/car";
import { fitImage } from "@/utils/fit-image";
import { redirect } from "next/navigation";


export const createCar = async (formData: FormData) => {
  const data = createCarSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    author_name: formData.get('author_name'),
    author_email: formData.get('author_email'),
    negotiable: formData.get('negotiable') || undefined,
    price_from: formData.get('price_from'),
    price_to: formData.get('price_to'),
    img: formData.get('img')
  });

  
  
  if (data.success) {
    const imgName = await fitImage(data.data.img)    
    console.log(imgName);

    const newCar = await addCar({
      title: data.data.title,
      description: data.data.description,
      author_name: data.data.author_name,
      author_email: data.data.author_email,
      price_from: data.data.price_from,
      price_to: data.data.price_to,
      negotiable: data.data.negotiable,
      imgName: imgName
    })

    console.log(newCar.id);
    
    redirect('/');
  } else {
    console.log(data.error.flatten().fieldErrors);    
  }  
}