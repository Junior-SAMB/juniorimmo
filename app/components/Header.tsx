import { Button } from "@/components/ui/button"
import {useState} from 'react'
import Image from 'next/image';

export default function Header() {
  return (
    <header className="relative h-screen flex items-center justify-center bg-fixed bg-center bg-cover" style={{backgroundImage:`url('/img.jpg')`}}>
       <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center p-6">
        <br/><br/><br/><br/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/RBG2.jpg" style={{ width: '35%'}}/>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/RBG.jpg" style={{ width: '35%'}}/>
            </div>
            <br/>
            <Button className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold animate-pulse">
                <a href='/chambres'>
                Réservez des maintenant !
                </a>
            </Button>
        </div>
    </header>
  )
}