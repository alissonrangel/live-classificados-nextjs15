"use client";

import { createCar } from "@/actions/create-car";
import { Button } from "./button";


export const AddForm = () => {
  return (
    <form action={createCar} >
      <label htmlFor="" className="block border border-gray-500 p-4 mb-3">
        <input type="file" name="img" id="" className="bg-black text-white text-lg w-full outline-none" />
      </label>
      <label htmlFor="" className="block border border-gray-500 p-4 mb-3">
        <input type="text" name="title" id="" placeholder="Digite io título do carro" className="bg-black text-white text-lg w-full outline-none"/>
      </label>
      <label htmlFor="" className="block border border-gray-500 p-4 mb-3">
        <input type="number" name="price_from" id="" placeholder="Digite o preço antigo" className="bg-black text-white text-lg w-full outline-none"/>
      </label>
      <label htmlFor="" className="block border border-gray-500 p-4 mb-3">
        <input type="number" name="price_to" id="" placeholder="Digite o preço novo" className="bg-black text-white text-lg w-full outline-none"/>
      </label>
      <label htmlFor="" className="block border border-gray-500 p-4 mb-3">
        <input type="checkbox" name="negotiable" id="" className="bg-black text-white text-lg w-full outline-none"/>
        Negociável?
      </label>
      <label htmlFor="" className="block border border-gray-500 p-4 mb-3">
        <input type="text" name="author_name" id="" placeholder="Digite o nome do vendedor" className="bg-black text-white text-lg w-full outline-none"/>
      </label>
      <label htmlFor="" className="block border border-gray-500 p-4 mb-3">
        <input type="email" name="author_email" id="" placeholder="Digite o email do vendedor" className="bg-black text-white text-lg w-full outline-none"/>
      </label>
      <label htmlFor="" className="block border border-gray-500 p-4 mb-3">
        <textarea name="description" id="" rows={4} className="bg-black text-white text-lg w-full outline-none"/>
      </label>
      <Button label="Cadastrar" />
    </form>
  )
}