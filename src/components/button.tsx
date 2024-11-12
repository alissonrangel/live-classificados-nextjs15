import Link from "next/link"

type Props = {
  label: string
}

export const Button = ( {label} : Props ) => {

  return(
    <button className="bg-green-700 text-white px-6 py-3 rounded">
      {label}      
    </button>
  )
}