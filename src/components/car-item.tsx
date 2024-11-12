import Link from "next/link";

type Props = {
  id: number;
  title: string;
  img: string;
  priceFrom: number;
  priceTo: number;
}

export const CarItem = ({id, title, img, priceFrom, priceTo}: Props) => {

  return (
    <Link href={`/car/${id}`}>
      <img src={`/uploads/${img}`} className="w-full rounded" alt="" width={600} height={400} />
      <p className="text-lf font-bold mt-1">{title}</p>
      <p className="text-gray-700 mt-1">De <del>{priceFrom.toFixed(2)}</del> por</p>
      <p className="text-green-700 font-bold text-2xl mt-1">R$ {priceTo.toFixed(2)}</p>
    </Link>
  )

} 