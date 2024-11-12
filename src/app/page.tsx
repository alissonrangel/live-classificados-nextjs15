import { getCars } from "@/actions/get-cars";
import { CarItem } from "@/components/car-item";
import { Header } from "@/components/header";
import Image from "next/image";

export default async function Page() {
  
  const cars = await getCars();
  
  return (
    <div>
      <Header/>

      <section className="mx-3 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        { cars.length > 0 &&
          cars.map((it, index) => (
            <CarItem key={it.id} id={it.id} title={it.title} img={it.img} priceFrom={it.priceFrom} priceTo={it.priceTo} />
          ))
         }
      </section>
    </div>
  );
}
