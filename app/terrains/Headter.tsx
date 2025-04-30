import { Button } from "@/components/ui/button"

export default function Headter() {
  return (
    <header className="relative h-screen flex items-center justify-center bg-fixed bg-center bg-cover" style={{backgroundImage:`url('/img.jpg')`}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center p-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                <span className="text-[#93f9a9]">Relax</span><span className="text-[#f9f093]">*</span><span className="text-[#be282b]">Loisirs</span>
            </h1>
            <p className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold animate-pulse">
                Votre destination de rêve
            </p>
        </div>

    </header>
  )
}