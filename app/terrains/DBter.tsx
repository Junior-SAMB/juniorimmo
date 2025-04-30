import { AreaType } from "../Types/areaType"
import Ter from "./Ter"

interface DBterProps {
  dataProducts: AreaType[]
}

export default function DBter({dataProducts}: DBterProps) {
  return (
    <div id="villa" className="max-w-[1000px] w-full mx-auto p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dataProducts.map((item)=> (
          <Ter key={item.name} item={item}/>
        ))}
      </div>
    </div>
  )
}