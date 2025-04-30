import { ApparType } from "../Types/apparType"
import Appart from "./Appart"

interface DBappartProps {
  dataProducts: ApparType[]
}

export default function DBappart({dataProducts}: DBappartProps) {
  return (
    <div id="villa" className="max-w-[1000px] w-full mx-auto p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dataProducts.map((item)=> (
          <Appart key={item.name} item={item}/>
        ))}
      </div>
    </div>
  )
}