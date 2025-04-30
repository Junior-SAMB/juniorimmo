import { ProductsType } from "../Types/productsType"
import Card from "./Card"

interface DBgalerieProps {
  dataProducts: ProductsType[]
}

export default function DBgalerie({dataProducts}: DBgalerieProps) {
  return (
    <div id="villa" className="max-w-[1000px] w-full mx-auto p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dataProducts.map((item)=> (
          <Card key={item.name} item={item}/>
        ))}
      </div>
    </div>
  )
}