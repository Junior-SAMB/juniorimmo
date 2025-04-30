"use client"

import Header from "./components/Header";
import {useState, useEffect} from "react";
import { collection, getDocs} from "firebase/firestore";
import {db} from "../app/db/firebaseConfig";
import DBgalerie from "@/app/components/DBgalerie";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductsType } from "./Types/productsType";

export default function Home() {

  const [dataProducts, setDataProducts] = useState<ProductsType[]>([])

  useEffect(()=> {
    fetchData()
  }, [])

  const fetchData = async ()=>{
    const productsCollection = collection(db, "products");
    const productsSnapchot = await getDocs(productsCollection);
    const productsData = productsSnapchot.docs.map((doc)=> ({
      id: doc.id,
      ...doc.data()
    })) as ProductsType[];
    setDataProducts(productsData)
  }
  console.log(dataProducts)

  return (
    <>
    <Header/>
    <DBgalerie dataProducts={dataProducts} />
    </>
  );
}
