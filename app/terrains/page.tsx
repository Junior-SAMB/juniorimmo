"use client"

import {useState, useEffect} from "react";
import { collection, getDocs} from "firebase/firestore";
import {db} from "@/app/db/firebaseConfig";
import DBter from "../terrains/DBter";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AreaType } from "../Types/areaType";

export default function Home() {

  const [dataProducts, setDataProducts] = useState<AreaType[]>([])

  useEffect(()=> {
    fetchData()
  }, [])

  const fetchData = async ()=>{
    const productsCollection = collection(db, "terrain");
    const productsSnapchot = await getDocs(productsCollection);
    const productsData = productsSnapchot.docs.map((doc)=> ({
      id: doc.id,
      ...doc.data()
    })) as AreaType[];
    setDataProducts(productsData)
  }
  console.log(dataProducts)

  return (
    <>
    <br/><br/><br/>
    <DBter dataProducts={dataProducts}/>
    </>
  );
}
